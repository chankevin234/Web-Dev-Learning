// import React from "react";

// eslint-disable-next-line react/prop-types
function ShoppingListItem({ item, qty, completed }) {
    let itemName = item;
    let itemQty = qty;
    let itemCompleted = completed;

    // create a style obj
    let styles = {
        color: itemCompleted ? 'grey' : 'red',
        textDecoration: itemCompleted ? 'line-through' : 'none'
    }
    // return 1 <LI> at a time
    return (
        <li style={styles}>
            {itemName} - {itemQty}
        </li>
    );
}

export default ShoppingListItem;