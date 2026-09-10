import React from "react";
import { useState } from "react";

const Array = () => {

  const [items, setItems] = useState([
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]);
  const [inputValue, setInputValue] = useState("");
  const addItem = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };
  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <h1>Weekdays</h1>
      <ul>
        {items.map((items, index) => (
          <li key={index}>
            {items}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

export default Array;