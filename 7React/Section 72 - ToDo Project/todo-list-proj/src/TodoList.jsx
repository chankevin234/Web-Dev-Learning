// MATERIAL UI IMPORTS
import List from "@mui/material/List";
import { Box, Typography } from "@mui/material";

// USESTATE
import { useState } from "react";
import { useEffect } from "react"; // RUN AN EFFECT WHEN SOMETHING HAPPENS (ex. state changes)

// components
import TodoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";

// const initialTodos = [
//   { id: 1, text: "walk the dog", isCompleted: false },
//   { id: 2, text: "walk the cat", isCompleted: true },
//   { id: 3, text: "walk the sister", isCompleted: false },
//   { id: 4, text: "walk the brother", isCompleted: true },
// ];
const getInitialData = () => {
  const data = JSON.parse(localStorage.getItem("todolist")); // eval if there is local storage
  if (!data) {
    return [];
  }
  return data;
};

export default function ToDoList() {
  // SET INTIIAL STATE + FUNC TO UPDATE THE STATE!
  const [todolist, setTodoList] = useState(getInitialData);

  // EFFECT OCCURS WHEN todolist value UPDATES
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(todolist)); // store locally
  }, [todolist]); // do something if todoList state changes!

  // delete functionality
  const removeToDo = (id) => {
    console.log(`Deleting item with id: ${id}`);
    setTodoList((prevTodo) => {
      return prevTodo.filter((item) => item.id !== id);
    });
  };

  // toggle isCompleted functionality
  const toggleTodo = (id) => {
    // id comes from the html tag's event handler
    console.log(`Toggling isCompleted for item id: ${id}`);
    setTodoList((prevTodo) => {
      return prevTodo.map((todo) => {
        // create a new obj arr
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted }; // update the obj's completed flag
        } else {
          return todo;
        }
      });
    });
  };

  // add new todo functionality
  const addTodo = (text) => {
    setTodoList((prevTodo) => {
      return [
        ...prevTodo,
        { id: crypto.randomUUID(), text: text, isCompleted: false },
      ];
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        m: 3,
      }}
    >
      <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
        Todo
      </Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        {todolist.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              removeToggle={() => removeToDo(todo.id)}
              toggleTodo={() => toggleTodo(todo.id)}
            />
          ); // return values over the map
        })}
        <ToDoForm addToggle={addTodo} />
      </List>
    </Box>
  );
}
