-- Database Setup for Product Showcase
-- Run this SQL file in your MySQL database to set up the required tables.

CREATE DATABASE IF NOT EXISTS product_showcase;
USE product_showcase;

-- 1. Users Table
CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Products Table
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image_url VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Carts Table (One cart per user)
CREATE TABLE IF NOT EXISTS carts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- 4. Cart Items Table
CREATE TABLE IF NOT EXISTS cart_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cart_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (cart_id) REFERENCES carts(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Seed Data (Optional)
INSERT INTO products (title, description, price, image_url) VALUES
('Ergonomic Office Chair', 'Premium mesh chair with lumbar support for all-day comfort.', 299.00, 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=800'),
('Mechanical Keyboard', 'Wireless mechanical keyboard with tactile switches.', 149.50, 'https://images.unsplash.com/photo-1587829741301-dc798b91a603?auto=format&fit=crop&q=80&w=800'),
('Noise Cancelling Headphones', 'Industry-leading noise cancellation and high-fidelity audio.', 349.00, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800'),
('Smart Watch Series 5', 'Advanced health monitoring and fitness tracking.', 399.00, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800'),
('Minimalist Desk Lamp', 'Adjustable LED desk lamp with wireless charging base.', 89.00, 'https://images.unsplash.com/photo-1507473888900-52e1adad5474?auto=format&fit=crop&q=80&w=800'),
('4K Monitor 27"', 'Ultra-sharp 4K resolution with color accuracy for creators.', 450.00, 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800'),
('Leather Laptop Sleeve', 'Handcrafted genuine leather sleeve for 13-inch laptops.', 75.00, 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800'),
('Wireless Mouse', 'Ergonomic wireless mouse with precision tracking.', 59.00, 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&q=80&w=800'),
('Ceramic Coffee Mug', 'Artisan ceramic mug, perfect for your morning brew.', 25.00, 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800'),
('Portable SSD 1TB', 'High-speed portable solid-state drive for data on the go.', 120.00, 'https://images.unsplash.com/photo-1597872252165-4827c2bdb042?auto=format&fit=crop&q=80&w=800');
