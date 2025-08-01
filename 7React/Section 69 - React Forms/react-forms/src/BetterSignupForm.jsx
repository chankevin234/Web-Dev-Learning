import { useState } from "react";

export default function BetterSignupForm() {

  // the initial state is an object (multiple inputs!)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    nickname: ""
  });

  //GENERIC HANDLE CHANGE function
  const handleChange = (evt) => {
    const changedField = evt.target.name; // determine the field/prop being changed (which input)
    const newValue = evt.target.value; // set new value (based on evt)

    setFormData((currData) => { // grab curr obj, then update it
      return {
        ...currData, // update currData obj's fields with new value
        [changedField]: newValue, // COMPUTED PROPERTY NAME!
      };
    });
  };

  // console.log the new updated obj
  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="first name"
        value={formData.firstName}
        onChange={handleChange}
        name="firstName"
        id="firstname"
      />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="last name"
        value={formData.lastName}
        onChange={handleChange}
        id="lastname"
        name="lastName"
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password"
        value={formData.password}
        onChange={handleChange}
        id="password"
        name="password"
      />
      <label htmlFor="nickname">Nickname</label>
      <input
        type="text"
        placeholder="nickname"
        value={formData.nickname}
        onChange={handleChange}
        id="nickname"
        name="nickname"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}