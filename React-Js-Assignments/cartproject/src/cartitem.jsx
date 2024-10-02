import React from "react";

const CartItem = ({ item, onRemove, onQuantityChange }) => {
  const handleIncrease = () => {
    onQuantityChange(item.id, item.quantity + 1);
  };

  const handleDecrease = () => {
    if (item.quantity > 1) {
      onQuantityChange(item.id, item.quantity - 1);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="100" height="100" />
      <div className="details">
        <h3>{item.name}</h3>
        <p>${item.price}</p>
        <div className="quantity-controls">
          <button onClick={handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
      </div>
      <button onClick={() => onRemove(item.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
