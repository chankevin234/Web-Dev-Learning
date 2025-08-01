/* eslint-disable react/prop-types */
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Create from "@mui/icons-material/Create";

import { useState } from "react";

export default function ToDoForm({ addToggle }) {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
    console.log("Current Text: " + text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addToggle(text);
    setText("");
  };

  return (
    <ListItem>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Add new todo item"
          variant="outlined"
          onChange={handleTextChange}
          value={text}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton aria-label="create todo" edge="end" type="submit">
                  <Create />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </form>
    </ListItem>
  );
}
