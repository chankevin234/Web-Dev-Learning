import { useState } from "react";
import { v4 as uuid } from "uuid";
// import ShoppingListForm from "./ShoppingListForm";
import ValidatedShoppingListForm from "./ValidatedShoppingListForm";

function ShoppingList() {
  const [items, setItems] = useState([
    { id: uuid(), product: "Bananas", quantity: 8 },
    { id: uuid(), product: "Eggs", quantity: 12 },
  ]);

  const addItem = (item) => {
    setItems((currItems) => {
      return [
        ...currItems, // old obj
        { ...item, id: uuid() } // new values in new obj
      ];
    });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.product} - {item.quantity}
          </li>
        ))}
      </ul>
      <ValidatedShoppingListForm addItem={addItem} />
    </div>
  );
}

export default ShoppingList;
