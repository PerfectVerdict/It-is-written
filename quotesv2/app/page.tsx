'use client';
import messages from "./db";
import { useState } from "react";

console.log(messages)
export default function Home() {
  const [quote, setQuote] = useState<string>("");
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setQuote(messages[randomIndex]);
  }
  return (
    <>
      <p className="quote">{quote}</p>
      <div className="buttonContainer" style={{
        display: "flex",
        marginTop: "20px",
      }}>
        <button className="button" onClick={getRandomQuote} style={{ fontSize: "40px" }}>It Is Written</button>
      </div>
    </>
  );
}
