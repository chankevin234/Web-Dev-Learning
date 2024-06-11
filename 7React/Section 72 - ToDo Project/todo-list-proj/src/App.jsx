import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";

import ToDoList from "./TodoList";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <CssBaseline />
      <NavBar />
      {/* <h1>Todos</h1> */}
      <ToDoList />
    </>
  );
}

export default App;
