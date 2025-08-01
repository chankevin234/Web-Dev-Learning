import Clicker from "./Clicker";
import OtherEvents from "./OtherEvents";
import Form from "./Form";

import "./App.css";

function App() {
  return (
    <div>
      <Form />
      <Clicker message="Hi!" buttonText="Please Click Me!"/>
      <OtherEvents />
    </div>
  );
}

export default App;
