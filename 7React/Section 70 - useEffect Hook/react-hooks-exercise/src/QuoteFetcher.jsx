import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcher() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  /* detailed version of useEffect
  useEffect(() => { // synchronous function running async func
    async function getInitialQuote() { 
      const response = await fetch(RANDOM_QUOTE_URL); // gets response from API
      const jsonResponse = await response.json(); // parse into JSON obj
      const randomQuote = jsonResponse.quote; // pull values from response
      setQuote(randomQuote); // update the STATE
    }
    getInitialQuote(); // run async function right away
  }, []); // only runs once after INITIAL render */

  // simplified version since useEffect reuses the fetchAndSetQuote asyncFn
  useEffect(() => {
    fetchAndSetQuote();
  }, []);

  async function fetchAndSetQuote() {
    const response = await fetch(RANDOM_QUOTE_URL);
    const jsonResponse = await response.json();
    const randomQuote = jsonResponse.quote;
    setQuote(randomQuote);
  }

  return (
    <div>
      <button onClick={fetchAndSetQuote}>Get Quote using Handler</button>
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
    </div>
  );
}
