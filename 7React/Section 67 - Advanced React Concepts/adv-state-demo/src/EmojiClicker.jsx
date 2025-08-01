/* eslint-disable no-unused-vars */
import { useState } from "react";
import { v4 as uuid } from 'uuid';

export default function EmojiClicker() {
    const [emojis, setEmoji] = useState([{ id: uuid(), emoji: "😀" }]);

    /**
     * Add an Emoji -> static func
     */
    let addEmoji = () => {
        // use the callback for useState's function to grab the old value of the state
        setEmoji(prevEmojis => {
            return [...prevEmojis, { id: uuid(), emoji: "😇" }];
        });
    };
    /**
     * Delete an Emoji (use arrow function so it doesn't immediately run!)
     */
    let deleteEmoji = (id) => {
        // console.log(id);
        setEmoji(prevEmojis => {
            return prevEmojis.filter((element) => element.id !== id);
        })
    }
    /**
     * Update ALL emojis
     */
    let updateAll = () => {
        console.log('Changing too ALL hearts');
        // CREATE a new emoji array and pass in as new state
        setEmoji(prevEmojis =>{
            return prevEmojis.map((element) => {
                // return an obj
                return {
                    ...element,
                    emoji: "💚"
                }
            })
        })
    }

    return (
        <div>
            {emojis.map((e) => (
                <span
                    onClick={() => { deleteEmoji(e.id) }}
                    key={e.id}
                    style={{ fontSize: "4rem" }}>
                    {e.emoji}
                </span>
            ))}
            <br />
            <button
                onClick={addEmoji}
            >
                Add Emoji
            </button>
            <br />
            <button
                onClick={updateAll}
            >
                Change ALL Emojis to &lt;3
            </button>
        </div>
    )
}