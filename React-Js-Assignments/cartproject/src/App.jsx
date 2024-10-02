import React, { useState } from "react";
import CartItem from "./cartitem";
import productImage1 from "./assets/image1.jpg";
import productImage2 from "./assets/image2.jpg";
import productImage3 from "./assets/image3.jpg";

const initialProducts = [
  { id: 1, name: "Product 1", price: 29.99, quantity: 1, image: productImage1 },
  { id: 2, name: "Product 2", price: 39.99, quantity: 1, image: productImage2 },
  { id: 3, name: "Product 3", price: 19.99, quantity: 1, image: productImage3 },
];

function App() {
  const [cartItems, setCartItems] = useState(initialProducts);

  const handleRemove = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="app">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={handleRemove}
              onQuantityChange={handleQuantityChange}
            />
          ))}
          <div className="cart-total">
            <h2>Total: ${totalCost}</h2>
            <button onClick={handleClearCart}>Clear Cart</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
