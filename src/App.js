import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [text, setText] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (text >= 100) {
        clearInterval(interval);
      } else {
        setText(text + 1);
      }
    }, 500);
    return () => {
      clearInterval(interval);
    };
  });
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div className="progressbar">
        <span style={{ color: text > 52 ? "white" : "black" }} className="text">
          {text}%
        </span>
        <div className="bar">
          <div style={{ width: `${text}%` }} className="insidebar"></div>
        </div>
      </div>
      <p>{text < 100 ? `Loading...` : `Complete!`}</p>
    </div>
  );
}
