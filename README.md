# ShoppyGlobe E-Commerce

A modern React-based e-commerce application that allows users to browse products, search products, filter by category, view product details, and manage their shopping cart.

---

## Features

### Product Listing
- Fetches products from DummyJSON API
- Responsive product grid layout
- Product cards with image, title, price, and actions

### Product Search
- Search products by name
- Real-time filtering

### Category Filtering
- Filter products by category
- Dynamic category generation

### Product Details
- View complete product information
- Product image
- Product description
- Price and rating

### Shopping Cart
- Add products to cart
- Remove products from cart
- Increase and decrease quantity
- Cart total calculation
- Empty cart state UI

### Navigation
- React Router based navigation
- Home page
- Product details page
- Cart page
- Checkout page

### Responsive Design
- Mobile-friendly layout
- Tablet support
- Desktop optimized UI

---

## Technologies Used

- React
- Redux Toolkit
- React Router DOM
- CSS3
- JavaScript (ES6+)
- Vite
- DummyJSON API

---

## Project Structure

```bash
src/
├── api/
│   
├── assets/
│  
│
├── components/
│   ├── Header/
├   ├── HeroSection/
│   ├── Footer/
│   ├── Product/
│   ├── Cart/
│   └── CategoryBar/
│
├── Layout/
│ 
├── pages/
│   ├── Home.jsx
│   ├── ProductDetail.jsx
│   ├── Cart.jsx
│   └── Checkout.jsx
│
├── redux/
│   ├── store.js
│   ├── cartSlice.js
│   └── searchSlice.js
│
├── hooks/
│   └── useProducts.js
│
├── redux/
│     └─ AppRouter.js
│ 
├── App.jsx
├── index.css
└── main.jsx


## Installation
### Option 1:
1. Download and extract the ZIP file.
2. Open the project folder in VS Code.
3. Open the terminal.
4. Install dependencies:

npm install

5. Start the development server:

npm run dev

----


### Option 2: Clone Repository

git clone https://github.com/Archanasingh27/E-commerce-ShoppyGlobe-.git

### Navigate to Project

cd E-commerce-ShoppyGlobe-

### Install Dependencies

npm install

### Run Development Server

npm run dev

---

## API Used

DummyJSON Products API

```bash
https://dummyjson.com/products
```

---

## Available Pages

### Home Page

- Hero Section
- Category Filter
- Product Listing
- Footer

### Product Details Page

Displays:

- Product Image
- Product Name
- Description
- Price
- Rating

### Cart Page

Displays:

- Cart Items
- Quantity Controls
- Order Summary
- Total Amount

### Checkout Page

Simple checkout confirmation screen.

---

## State Management

Redux Toolkit is used for:

### Cart State

- Add product
- Remove product
- Increase quantity
- Decrease quantity

### Search State

- Search products globally

---

## Future Enhancements

- User Authentication
- Wishlist Feature
- Payment Gateway Integration
- Order History
- Product Reviews
- Dark Mode

---

## Author

Archana Singh

## Github Repo

https://github.com/Archanasingh27/E-commerce-ShoppyGlobe-.git

