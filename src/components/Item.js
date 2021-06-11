import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCart() {
    setIsInCart((isInCart) => !isInCart);
  }

  const cartClass = {
    true: "remove",
    false: "add"
  };

  const cartBtnText = {
    true: "Remove From Cart",
    false: "Add To Cart"
  };

  return (
    <li className={isInCart && "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartClass[isInCart]} onClick={handleAddToCart}>
        {cartBtnText[isInCart]}
      </button>
    </li>
  );
}

export default Item;
