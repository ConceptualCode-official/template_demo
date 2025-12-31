export interface User {
  id: string; // Changed to string for UUID
  name: string;
  email: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image_url: string;
}

export interface CartItem {
  id: number; // unique id for the cart item entry
  product: Product;
  quantity: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
