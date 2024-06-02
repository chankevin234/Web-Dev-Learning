/* eslint-disable no-unused-vars */
import * as React from "react";
import MUIButtons from "./MUIButtons";
import Ratings from "./Ratings";
import Forms from "./Forms";
import NavBar from "./NavBar";

import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <MUIButtons variant={"text"} />
      <MUIButtons variant={"error"} />
      <MUIButtons variant={"success"} />

      <Ratings />

      <Forms />
    </div>
  );
}

export default App;
