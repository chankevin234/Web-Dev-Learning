import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function QuoteFetcherLoader() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [isLoading, setIsLoading] = useState(true)
  
  // simplified version since useEffect reuses the fetchAndSetQuote asyncFn
  useEffect(() => {
    async function fetchAndSetQuote() {
      const response = await fetch(RANDOM_QUOTE_URL);
      const jsonResponse = await response.json();
      const randomQuote = jsonResponse.quote;
      setQuote(randomQuote);
      // set loading screen off
      setIsLoading(false);
    }
    fetchAndSetQuote();
  }, []);

  return (
    <div>
      {/* <button onClick={fetchAndSetQuote}>Get Quote using Handler</button> */}
      {isLoading && <p>Loading....</p>}
      <h1>{quote.text}</h1>
      <h3>{quote.author}</h3>
    </div>
  );
}
