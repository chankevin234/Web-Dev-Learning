import { useState } from "react";

function UsernameForm() {
  const [username, setUsername] = useState("");
  
  let updateUsername = (evt) => {
    console.log("Changed! ", evt.target.value); 
    // you are constantly updating the state as you type in form
    setUsername(evt.target.value);
  };
  
  return (
    <div>
      <label htmlFor="username">Enter a Username: </label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="username"
        value={username}
        onChange={updateUsername}
      />
      <button>Submit</button>
    </div>
  );
}

export default UsernameForm;
