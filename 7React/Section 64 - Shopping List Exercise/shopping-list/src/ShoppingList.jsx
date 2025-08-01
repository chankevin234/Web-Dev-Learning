/* eslint-disable react/prop-types */
// import React from "react";
import ShoppingListItem from "./ShoppingListItem";

export default function ShoppingList(props) {
    let items = props.items;

    return (
        <>
            <ul>
                {items.map((i) => 
                    <ShoppingListItem
                        key={i.id}
                        item={i.item}
                        qty={i.qty}
                        completed={i.completed}
                    />
                )}
            </ul>
        </>
    )
}