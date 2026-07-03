import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/CartSlice';
import '../styles/ProductList.css';

function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState(new Set());
  const cartItems = useSelector((state) => state.cart.items);

  const plants = {
    'Succulents': [
      { 
        id: 1, 
        name: 'Aloe Vera', 
        price: 15, 
        image: 'https://images.unsplash.com/photo-1585454281950-a7c3a2dd8f3f?w=300&h=300&fit=crop' 
      },
      { 
        id: 2, 
        name: 'Jade Plant', 
        price: 18, 
        image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=300&fit=crop' 
      },
      { 
        id: 3, 
        name: 'Echeveria', 
        price: 12, 
        image: 'https://images.unsplash.com/photo-1578769179211-05aa5c39a3b4?w=300&h=300&fit=crop' 
      },
      { 
        id: 4, 
        name: 'Zebra Plant', 
        price: 14, 
        image: 'https://images.unsplash.com/photo-1596511733574-9ed76e0d1c27?w=300&h=300&fit=crop' 
      },
      { 
        id: 5, 
        name: 'Crassula Ovata', 
        price: 20, 
        image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop' 
      },
      { 
        id: 6, 
        name: 'Sempervivum', 
        price: 11, 
        image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=300&h=300&fit=crop' 
      },
    ],
    'Tropical Plants': [
      { 
        id: 7, 
        name: 'Monstera Deliciosa', 
        price: 35, 
        image: 'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=300&h=300&fit=crop' 
      },
      { 
        id: 8, 
        name: 'Bird of Paradise', 
        price: 45, 
        image: 'https://images.unsplash.com/photo-1563241527-3004b6a30f45?w=300&h=300&fit=crop' 
      },
      { 
        id: 9, 
        name: 'Philodendron', 
        price: 28, 
        image: 'https://images.unsplash.com/photo-1604431814087-bdbf20691840?w=300&h=300&fit=crop' 
      },
      { 
        id: 10, 
        name: 'Anthurium', 
        price: 32, 
        image: 'https://images.unsplash.com/photo-1568659019394-512f4b5f5b0a?w=300&h=300&fit=crop' 
      },
      { 
        id: 11, 
        name: 'Hibiscus', 
        price: 40, 
        image: 'https://images.unsplash.com/photo-1597848212624-1d5d3ed4d5f5?w=300&h=300&fit=crop' 
      },
      { 
        id: 12, 
        name: 'Bougainvillea', 
        price: 38, 
        image: 'https://images.unsplash.com/photo-1566417528978-46892f45dc98?w=300&h=300&fit=crop' 
      },
    ],
    'Low-Light Plants': [
      { 
        id: 13, 
        name: 'Pothos', 
        price: 16, 
        image: 'https://images.unsplash.com/photo-1595531203269-cc40be2d9fdd?w=300&h=300&fit=crop' 
      },
      { 
        id: 14, 
        name: 'Snake Plant', 
        price: 22, 
        image: 'https://images.unsplash.com/photo-1604025437006-7b27fdcc803a?w=300&h=300&fit=crop' 
      },
      { 
        id: 15, 
        name: 'ZZ Plant', 
        price: 25, 
        image: 'https://images.unsplash.com/photo-1600664226443-b09e22d0e4cf?w=300&h=300&fit=crop' 
      },
      { 
        id: 16, 
        name: 'Peace Lily', 
        price: 20, 
        image: 'https://images.unsplash.com/photo-1577902212355-b8b59c01c331?w=300&h=300&fit=crop' 
      },
      { 
        id: 17, 
        name: 'Dracaena', 
        price: 24, 
        image: 'https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=300&h=300&fit=crop' 
      },
      { 
        id: 18, 
        name: 'Calathea', 
        price: 28, 
        image: 'https://images.unsplash.com/photo-1630267937063-1dc1ff97e22e?w=300&h=300&fit=crop' 
      },
    ],
  };

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
    setAddedItems(new Set([...addedItems, plant.id]));
  };

  const isPlantInCart = (plantId) => {
    return addedItems.has(plantId) || cartItems.some(item => item.id === plantId);
  };

  return (
    <div className="product-list-container">
      <h1 className="page-title">Explore Our Beautiful Plant Collection</h1>
      
      {Object.entries(plants).map((category, index) => (
        <div key={index} className="category-section">
          <h2 className="category-title">{category[0]}</h2>
          <div className="plants-grid">
            {category[1].map((plant) => (
              <div key={plant.id} className="plant-card">
                <div className="plant-image-container">
                  <img src={plant.image} alt={plant.name} className="plant-image" />
                </div>
                <div className="plant-details">
                  <h3 className="plant-name">{plant.name}</h3>
                  <p className="plant-price">${plant.price}</p>
                  <button
                    className={`add-to-cart-btn ${isPlantInCart(plant.id) ? 'disabled' : ''}`}
                    onClick={() => handleAddToCart(plant)}
                    disabled={isPlantInCart(plant.id)}
                  >
                    {isPlantInCart(plant.id) ? '✓ Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
