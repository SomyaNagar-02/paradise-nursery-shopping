import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import AboutUs from './pages/AboutUs';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home onGetStarted={() => setShowProductList(true)} />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Router>
    </Provider>
  );

export default App;
