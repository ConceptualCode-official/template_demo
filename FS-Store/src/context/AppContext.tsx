import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Product, CartItem } from '../types';
import { PRODUCTS as MOCK_PRODUCTS } from '../data/mockData';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface AppContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  
  // Auth Actions
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  
  // UI State
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  isAuthModalOpen: boolean;
  setAuthModalOpen: (isOpen: boolean) => void;
  authView: 'login' | 'signup';
  setAuthView: (view: 'login' | 'signup') => void;

  // Data
  products: Product[];
  cart: CartItem[];
  addToCart: (product: Product) => Promise<void>;
  removeFromCart: (productId: number) => Promise<void>;
  updateQuantity: (productId: number, delta: number) => Promise<void>;
  clearCart: () => Promise<void>;
  cartCount: number;
  cartTotal: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // UI State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState<'login' | 'signup'>('login');

  // Helper: Seed Products if DB is empty
  const seedProducts = async () => {
    if (!supabase) return;
    try {
      const { count } = await supabase.from('products').select('*', { count: 'exact', head: true });
      if (count === 0) {
        console.log('Seeding products...');
        // Remove IDs to let DB auto-increment
        const productsToInsert = MOCK_PRODUCTS.map(({ id, ...rest }) => rest);
        const { error } = await supabase.from('products').insert(productsToInsert);
        if (error) console.error('Error seeding products:', error);
      }
    } catch (err) {
      console.error('Seeding check failed:', err);
    }
  };

  // 1. Initialize Auth & Data
  useEffect(() => {
    const initApp = async () => {
      setIsLoading(true);
      
      if (isSupabaseConfigured() && supabase) {
        // A. Seed & Fetch Products
        await seedProducts();
        
        const { data: productData, error } = await supabase
          .from('products')
          .select('*')
          .order('id');
        
        if (!error && productData && productData.length > 0) {
          setProducts(productData);
        } else {
          setProducts(MOCK_PRODUCTS);
        }

        // B. Check Session
        const { data: { session } } = await supabase.auth.getSession();
        if (session?.user) {
          setUser({
            id: session.user.id,
            email: session.user.email || '',
            name: session.user.user_metadata?.name || 'User'
          });
          await fetchCart(session.user.id);
        } else {
          // Load local cart for guests
          const storedCart = localStorage.getItem('cart');
          if (storedCart) setCart(JSON.parse(storedCart));
        }

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
          if (session?.user) {
            setUser({
              id: session.user.id,
              email: session.user.email || '',
              name: session.user.user_metadata?.name || 'User'
            });
            // Note: We don't strictly need to fetchCart here if login() handles it, 
            // but it serves as a safety net for other auth events (like token refresh or auto-login)
            if (event !== 'SIGNED_IN') {
                await fetchCart(session.user.id);
            }
          } else {
            setUser(null);
            setCart([]); // Clear cart on logout
          }
        });
        
        setIsLoading(false);
        return () => subscription.unsubscribe();
      } else {
        // Fallback for no Supabase
        setProducts(MOCK_PRODUCTS);
        const storedUser = localStorage.getItem('user');
        if (storedUser) setUser(JSON.parse(storedUser));
        const storedCart = localStorage.getItem('cart');
        if (storedCart) setCart(JSON.parse(storedCart));
        setIsLoading(false);
      }
    };

    initApp();
  }, []);

  // 2. Cart Persistence (Local Storage for Guest)
  useEffect(() => {
    if (!user) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart, user]);

  // Helper: Fetch Cart from DB
  const fetchCart = async (userId: string) => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from('cart_items')
      .select('*, product:products(*)')
      .eq('user_id', userId);
    
    if (!error && data) {
      // Transform DB shape to App shape
      const formattedCart: CartItem[] = data.map((item: any) => ({
        id: item.id,
        quantity: item.quantity,
        product: item.product
      }));
      setCart(formattedCart);
    }
  };

  // Helper: Merge Guest Cart to DB
  const mergeGuestCart = async (userId: string, guestCart: CartItem[]) => {
    if (!supabase || guestCart.length === 0) return;
    
    const itemsToInsert = guestCart.map(item => ({
      user_id: userId,
      product_id: item.product.id,
      quantity: item.quantity
    }));

    // Upsert items to merge local data with DB data
    const { error } = await supabase
      .from('cart_items')
      .upsert(itemsToInsert, { onConflict: 'user_id, product_id' });
      
    if (error) console.error('Error merging guest cart:', error);
  };

  // Actions
  const login = async (email: string, password: string) => {
    setIsLoading(true);
    // Capture current cart items before any state updates might clear them
    const currentGuestCart = [...cart];

    try {
      if (isSupabaseConfigured() && supabase) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        
        // Merge local cart if user exists and has items in guest cart
        if (data.session?.user && currentGuestCart.length > 0) {
           await mergeGuestCart(data.session.user.id, currentGuestCart);
           // Refresh cart to show merged items
           await fetchCart(data.session.user.id);
        } else if (data.session?.user) {
           // If no guest cart, just fetch user's DB cart
           await fetchCart(data.session.user.id);
        }

        setAuthModalOpen(false);
      } else {
        // Mock
        await new Promise(resolve => setTimeout(resolve, 1000));
        const newUser = { id: '1', name: 'Demo User', email };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        setAuthModalOpen(false);
      }
    } catch (error: any) {
      console.error("Login failed:", error);
      if (error.message?.includes("Email not confirmed") || error.code === "email_not_confirmed") {
        alert("Please check your email to confirm your account before logging in.");
      } else {
        alert(error.message || "Login failed");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true);
    try {
      if (isSupabaseConfigured() && supabase) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { name }
          }
        });
        if (error) throw error;
        alert("Account created! Please check your email to confirm your registration before logging in.");
        setAuthView('login');
      } else {
        // Mock
        await new Promise(resolve => setTimeout(resolve, 1000));
        const newUser = { id: '123', name, email };
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        setAuthModalOpen(false);
      }
    } catch (error: any) {
      console.error("Signup failed:", error);
      alert(error.message || "Signup failed");
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    if (isSupabaseConfigured() && supabase) {
      await supabase.auth.signOut();
      setCart([]);
    } else {
      setUser(null);
      localStorage.removeItem('user');
      setCart([]);
    }
  };

  const addToCart = async (product: Product) => {
    // Optimistic Update
    const prevCart = [...cart];
    let newCart = [...cart];
    const existingItem = newCart.find(item => item.product.id === product.id);

    if (existingItem) {
      newCart = newCart.map(item => 
        item.product.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
    } else {
      newCart.push({ id: Date.now(), product, quantity: 1 });
    }
    setCart(newCart);
    setIsCartOpen(true);

    // DB Sync
    if (user && supabase) {
      const { error } = await supabase
        .from('cart_items')
        .upsert({
          user_id: user.id,
          product_id: product.id,
          quantity: existingItem ? existingItem.quantity + 1 : 1
        }, { onConflict: 'user_id, product_id' });
      
      if (error) {
        console.error("Cart sync error", error);
        setCart(prevCart); // Revert
      } else {
        await fetchCart(user.id); // Refresh for correct IDs
      }
    }
  };

  const removeFromCart = async (productId: number) => {
    const prevCart = [...cart];
    setCart(prev => prev.filter(item => item.product.id !== productId));

    if (user && supabase) {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', productId);
        
      if (error) setCart(prevCart);
    }
  };

  const updateQuantity = async (productId: number, delta: number) => {
    const item = cart.find(i => i.product.id === productId);
    if (!item) return;
    
    const newQty = Math.max(1, item.quantity + delta);
    const prevCart = [...cart];
    
    setCart(prev => prev.map(i => i.product.id === productId ? { ...i, quantity: newQty } : i));

    if (user && supabase) {
      const { error } = await supabase
        .from('cart_items')
        .update({ quantity: newQty })
        .eq('user_id', user.id)
        .eq('product_id', productId);
        
      if (error) setCart(prevCart);
    }
  };

  const clearCart = async () => {
    setCart([]);
    if (user && supabase) {
      await supabase.from('cart_items').delete().eq('user_id', user.id);
    } else {
      localStorage.removeItem('cart');
    }
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const cartTotal = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  return (
    <AppContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        signup,
        isCartOpen,
        setIsCartOpen,
        isAuthModalOpen,
        setAuthModalOpen,
        authView,
        setAuthView,
        products,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        cartTotal
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
