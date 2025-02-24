'use client';
import messages from "./db";
import { useState } from "react";

console.log(messages)
export default function Home() {
  //* Create a state variable for the quote
  const [quote, setQuote] = useState<string>("");
  //* Function to change quote to a random one
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setQuote(messages[randomIndex]);
  }
  return (
    <>
      {/* Render the quote dynamically */}
      <p className="quote">{quote}</p>

      <div className="buttonContainer" style={{
        display: "flex",
        marginTop: "20px",

      }}>
        <button className="button" onClick={getRandomQuote}>It Is Written</button>

      </div>
    </>
  );
}
