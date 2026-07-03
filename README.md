# Paradise Nursery Shopping Application

## Project Overview

Paradise Nursery is a dynamic e-commerce web application designed for an online plant shop. The application allows users to browse a wide variety of houseplants, view detailed information, add plants to their shopping cart, and manage their cart with an intuitive user interface.

## Features

### 1. **Landing Page**
   - Beautiful hero section with company branding
   - "Get Started" button to navigate to the product listing
   - Responsive background image design

### 2. **Navigation Bar**
   - Sticky navigation bar visible on all pages
   - Links to Home, Plants, About Us, and Cart
   - Dynamic cart icon displaying total number of items
   - Green color scheme matching Paradise Nursery branding

### 3. **Product Listing Page**
   - Display of at least six unique houseplants per category
   - Three main categories: Succulents, Tropical Plants, and Low-Light Plants
   - Each plant shows:
     - Thumbnail image
     - Plant name
     - Price
   - "Add to Cart" buttons for each plant
   - Add to Cart functionality:
     - Adds product to shopping cart
     - Disables button after adding
     - Increments cart icon count dynamically

### 4. **Shopping Cart Page**
   - Displays all items currently in the cart
   - Shows for each item:
     - Thumbnail image
     - Plant name
     - Unit price
     - Total price for that item
   - Quantity management:
     - Increase quantity button
     - Decrease quantity button
     - Real-time cart updates
   - Delete button to remove items from cart
   - Order summary showing:
     - Total number of items
     - Total products count
     - Total cart amount
   - "Proceed to Checkout" button (Coming Soon message)
   - "Continue Shopping" button to return to product listing

### 5. **About Us Page**
   - Company information
   - Mission statement
   - Why choose Paradise Nursery
   - Sustainability commitment
   - Contact information

## Technology Stack

- **Frontend Framework**: React 18
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **CSS**: Custom CSS with responsive design
- **Node.js**: v14 or higher

## Project Structure

```
paradise-nursery-shopping/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductList.jsx
│   │   └── CartItem.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── AboutUs.jsx
│   ├── redux/
│   │   ├── CartSlice.jsx
│   │   └── store.js
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── ProductList.css
│   │   ├── CartItem.css
│   │   └── AboutUs.css
│   ├── App.jsx
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps to Run

1. **Navigate to the project directory:**
   ```bash
   cd paradise-nursery-shopping
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## How to Use

### Browsing Plants
1. Click "Get Started" on the landing page or "Plants" in the navigation
2. Browse plants by category
3. View plant details including name and price

### Adding to Cart
1. Click "Add to Cart" button on any plant
2. Button will disable and show "✓ Added to Cart"
3. Cart icon updates with total quantity

### Managing Cart
1. Click the cart icon in the navigation to view your cart
2. Increase/decrease quantities using +/- buttons
3. Delete items using the delete button
4. View real-time total amount

### Checkout
1. Review your order in the cart summary
2. Click "Proceed to Checkout" (Coming Soon feature)
3. Use "Continue Shopping" to return to products

## Redux State Management

The application uses Redux Toolkit for state management with the following actions:

- `addToCart`: Add a product to the cart
- `removeFromCart`: Remove a product from the cart
- `incrementQuantity`: Increase quantity of a cart item
- `decrementQuantity`: Decrease quantity of a cart item
- `clearCart`: Clear all items from the cart

## Component Descriptions

### **Navbar.jsx**
Displays the navigation bar with links to Home, Plants, About Us, and Cart. Shows a dynamic badge on the cart icon displaying the total number of items.

### **ProductList.jsx**
Displays all available plants organized by category. Each plant card shows the image, name, and price with an "Add to Cart" button that manages state and disables after adding.

### **CartItem.jsx**
Displays the shopping cart with full management capabilities including quantity adjustment, item deletion, and order summary with checkout and continue shopping options.

### **Home.jsx**
Landing page with company branding, introduction, and a "Get Started" button that navigates to the product listing.

### **AboutUs.jsx**
Company information page with details about Paradise Nursery, mission, values, and contact information.

## Responsive Design

The application is fully responsive and works seamlessly on:
- Desktop screens (1200px and above)
- Tablets (768px - 1199px)
- Mobile devices (below 768px)

## Future Enhancements

- Implement actual checkout functionality with payment processing
- Add user authentication and account management
- Implement product filtering and search
- Add product reviews and ratings
- Integrate with a backend API
- Add wishlist functionality
- Implement order history and tracking

## Color Scheme

- **Primary Green**: #28a745
- **Secondary Green**: #20c997
- **Background**: #f5f5f5
- **Text**: #333
- **Accent Red**: #ff6b6b

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

Paradise Nursery Development Team

## License

This project is created as part of an educational assignment.

---

**Note**: The checkout functionality is currently a placeholder with a "Coming Soon" message. This will be implemented in future versions with actual payment processing.
