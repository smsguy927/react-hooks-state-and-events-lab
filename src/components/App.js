import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [mode, setIsDarkMode] = useState(false);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  function handleModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (mode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeClick}>
          {mode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
