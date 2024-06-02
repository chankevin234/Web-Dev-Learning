import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect (takes in a function) --> will rerun after ALL re-renders
  useEffect(
    function myEffect() {
      console.log("My Effect was called!");
    },
    [count] // THIS MEANS ONLY WHEN COUNT CHANGES, DOES USEEFFECT RUN
  );

  let increment = () => {
    setCount((oldCount) => {
      return oldCount + 1;
    });
  };

  let handleChange = (evt) => {
    setName(evt.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <p>Name: {name}</p>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
