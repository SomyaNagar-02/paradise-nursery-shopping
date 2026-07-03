# Paradise Nursery - Quick Start Guide

## Getting Started with the Project

This guide will help you set up and run the Paradise Nursery Shopping Application on your local machine.

## System Requirements

- **Node.js**: Version 14.0 or higher
- **npm**: Version 6.0 or higher (comes with Node.js)
- **Git**: For version control and pushing to GitHub
- **Code Editor**: VS Code, Sublime Text, or any preferred editor

## Installation Steps

### Step 1: Install Node.js and npm

If you haven't already installed Node.js:

1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version
3. Follow the installation prompts
4. Verify installation by opening terminal/cmd and running:
   ```
   node --version
   npm --version
   ```

### Step 2: Clone or Set Up the Project

**If cloning from GitHub:**
```bash
git clone https://github.com/your-username/paradise-nursery-shopping.git
cd paradise-nursery-shopping
```

**If starting fresh in the provided folder:**
```bash
cd d:/IBM-shopping-app
```

### Step 3: Install Dependencies

Run the following command to install all required packages:

```bash
npm install
```

This will install:
- React and React DOM
- Redux and React-Redux
- React Router
- All other dependencies

### Step 4: Start the Development Server

Run the application with:

```bash
npm start
```

The application will:
- Compile the code
- Open in your default browser at `http://localhost:3000`
- Automatically reload when you make changes

## Project File Structure

```
paradise-nursery-shopping/
├── public/
│   └── index.html                 # Main HTML file
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Navigation component
│   │   ├── ProductList.jsx        # Product listing component
│   │   └── CartItem.jsx           # Shopping cart component
│   ├── pages/
│   │   ├── Home.jsx              # Landing page
│   │   └── AboutUs.jsx           # About company page
│   ├── redux/
│   │   ├── CartSlice.jsx         # Redux slice for cart
│   │   └── store.js              # Redux store configuration
│   ├── styles/
│   │   ├── Navbar.css
│   │   ├── ProductList.css
│   │   ├── CartItem.css
│   │   └── AboutUs.css
│   ├── App.jsx                   # Main App component
│   ├── App.css                   # App-level styles
│   ├── index.js                  # Entry point
│   └── index.css                 # Global styles
├── package.json                  # Dependencies and scripts
├── README.md                     # Project documentation
└── .gitignore                    # Git ignore rules
```

## Pushing to GitHub

### Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Name it: `paradise-nursery-shopping`
3. Add description: "A dynamic shopping cart application for Paradise Nursery plant shop"
4. Choose Public or Private
5. Do NOT initialize with README (we already have one)
6. Click "Create repository"

### Step 2: Initialize Git (if not already done)

```bash
cd d:/IBM-shopping-app
git init
git add .
git commit -m "Initial commit: Paradise Nursery Shopping Application"
```

### Step 3: Push to GitHub

Copy the commands from your GitHub repository and run:

```bash
git branch -M main
git remote add origin https://github.com/your-username/paradise-nursery-shopping.git
git push -u origin main
```

### Getting File URLs for Assignment

After pushing to GitHub, you can get URLs for each required file:

1. **README.md**: 
   ```
   https://github.com/your-username/paradise-nursery-shopping/blob/main/README.md
   ```

2. **AboutUs.jsx**: 
   ```
   https://github.com/your-username/paradise-nursery-shopping/blob/main/src/pages/AboutUs.jsx
   ```

3. **App.css**: 
   ```
   https://github.com/your-username/paradise-nursery-shopping/blob/main/src/App.css
   ```

4. **App.jsx**: 
   ```
   https://github.com/your-username/paradise-nursery-shopping/blob/main/src/App.jsx
   ```

5. **CartSlice.jsx**: 
   ```
   https://github.com/your-username/paradise-nursery-shopping/blob/main/src/redux/CartSlice.jsx
   ```

6. **ProductList.jsx**: 
   ```
   https://github.com/your-username/paradise-nursery-shopping/blob/main/src/components/ProductList.jsx
   ```

7. **CartItem.jsx**: 
   ```
   https://github.com/your-username/paradise-nursery-shopping/blob/main/src/components/CartItem.jsx
   ```

## Verifying the Application Works

### Test Navigation
1. Click "Get Started" button - should navigate to Plants page
2. Click "Home" in navbar - should return to landing page
3. Click "About Us" - should show company information
4. Click "Cart" - should show empty cart initially

### Test Product Listing
1. On Plants page, see products organized by categories
2. See at least 6 plants per category
3. Each plant displays thumbnail, name, and price

### Test Add to Cart
1. Click "Add to Cart" on a plant
2. Button should change to "✓ Added to Cart" and disable
3. Cart badge should increment
4. Click cart icon to view added item

### Test Cart Functionality
1. In cart, see item details, price, and quantity
2. Click + to increase quantity
3. Click - to decrease quantity
4. Click delete button to remove item
5. See total price update in real-time
6. Click "Continue Shopping" to return to products

## Troubleshooting

### Issue: Port 3000 already in use
**Solution**: 
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
PORT=3001 npm start
```

### Issue: Dependencies not installing
**Solution**:
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -r node_modules package-lock.json
npm install
```

### Issue: Git push fails
**Solution**:
```bash
# Make sure git is configured
git config --global user.email "your-email@example.com"
git config --global user.name "Your Name"

# Update remote URL if needed
git remote set-url origin https://github.com/your-username/paradise-nursery-shopping.git
```

## Available Scripts

- **`npm start`** - Runs the app in development mode
- **`npm build`** - Builds the app for production
- **`npm test`** - Runs the test suite
- **`npm eject`** - Ejects from Create React App (one-way operation)

## Features Overview

✅ **Landing Page** with company branding and Get Started button
✅ **Navigation Bar** with links to all pages and dynamic cart count
✅ **Product Listing** with 6+ plants per 3+ categories
✅ **Add to Cart** with button state management
✅ **Shopping Cart** with full item management
✅ **Quantity Control** with increment/decrement
✅ **Item Removal** with delete functionality
✅ **Order Summary** with total calculations
✅ **Responsive Design** for all device sizes
✅ **Redux State Management** for cart operations
✅ **About Us Page** with company information

## Next Steps

1. Run `npm install` to install all dependencies
2. Run `npm start` to start the development server
3. Test all features in your browser
4. Create a GitHub repository and push the code
5. Copy the GitHub URLs for each required file
6. Submit the assignment with the GitHub URLs

## Support

For issues or questions about the code:
1. Check the README.md for detailed documentation
2. Review comments in the component files
3. Check for console errors in browser DevTools (F12)
4. Verify all node_modules are installed properly

Good luck with your Paradise Nursery Shopping Application!
