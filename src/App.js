import React, { useState } from "react";
import "./style.css";
import DisplayCharacter from "./components/DisplayCharacter";
import axios from "axios";

const sampleSimpson = [
  {
    quote:
      "I live in a single room above a bowling alley...and below another bowling alley.",
    character: "Frank Grimes",
    image:
      "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FFrankGrimes.png?1497567511887",
    characterDirection: "Left",
  },
];

export default function App() {
  const [quote, setQuote] = useState(sampleSimpson);
  const API = "https://simpsons-quotes-api.herokuapp.com/quotes?count=1";

  const handleClick = () => {
    axios
      .get(API)
      .then((response) => response.data)
      .then((response) => setQuote(response));
  };

  return (
    <div className="main">
      <button onClick={handleClick}>
        Display a new quotation from a new Simpson character
      </button>
      <DisplayCharacter character={quote} />
    </div>
  );
}
