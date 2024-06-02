/* eslint-disable react/prop-types */
import { useState } from "react";

export default function ProfileSearchForm({ search }) {
  // take in a search function from the ProfileViewerWithSearch component

  const [term, setTerm] = useState("");

  // checks for inputs into the search box
  function handleChange(event) {
    setTerm(event.target.value); // set term value
  }
  function handleSubmit(event) {
    event.preventDefault(); // stop you changing pages - DEV
    search(term); // send the term upwards to PARENT
    setTerm(""); // change form back to empty
    console.log("Submitting username: " + term);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id="search"
        value={term}
        onChange={handleChange}
      />
      <button>Search!</button>
    </form>
  );
}
