import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeItem, updateQuantity, decrementQuantity } from '../redux/CartSlice';
import '../styles/CartItem.css';

function CartItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const handleRemoveFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const handleIncrementQuantity = (id) => {
    const item = cartItems.find(i => i.id === id);
    if (item) {
      dispatch(updateQuantity({ id, quantity: item.quantity + 1 }));
    }
  };

  const handleDecrementQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleContinueShopping = () => {
    navigate('/plants');
  };

  const handleCheckout = () => {
    alert('Checkout Coming Soon! Thank you for shopping at Paradise Nursery.');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty</p>
          <button className="continue-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      
      <div className="cart-content">
        <div className="cart-items-section">
          <h2>Items in Cart ({totalQuantity})</h2>
          
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img src={item.image} alt={item.name} />
              </div>
              
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">Unit Price: ${item.price.toFixed(2)}</p>
              </div>

              <div className="item-quantity">
                <button 
                  className="qty-btn" 
                  onClick={() => handleDecrementQuantity(item.id)}
                >
                  −
                </button>
                <span className="qty-display">{item.quantity}</span>
                <button 
                  className="qty-btn" 
                  onClick={() => handleIncrementQuantity(item.id)}
                >
                  +
                </button>
              </div>

              <div className="item-total">
                <p>Total: ${item.totalPrice.toFixed(2)}</p>
              </div>

              <button 
                className="delete-btn"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                🗑️ Delete
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <span>Total Items:</span>
            <span>{totalQuantity}</span>
          </div>
          <div className="summary-item">
            <span>Total Products:</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="summary-total">
            <span>Total Amount:</span>
            <span className="total-price">${totalPrice.toFixed(2)}</span>
          </div>

          <button className="checkout-btn" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
          <p className="checkout-message">Coming Soon!</p>

          <button className="continue-btn" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
