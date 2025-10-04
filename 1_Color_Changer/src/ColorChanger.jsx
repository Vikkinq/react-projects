import { useState } from "react";

import "./assets/ColorChanger.css";

export default function ColorChanger({ dataColor }) {
  const [color, setColor] = useState("white");

  const change = (clr) => {
    setColor(clr.target.value);
  };

  const randomColor = () => {
    const rand = Math.floor(Math.random() * dataColor.length);
    setColor(dataColor[rand]);
  };

  document.body.style.backgroundColor = color;
  return (
    <div>
      {dataColor.map((c, i) => (
        <button onClick={change} style={{ backgroundColor: c }} key={i} value={c}>
          {c}
        </button>
      ))}
      <button key={1} onClick={randomColor} className="RandomBtn">
        Pick Random Color
      </button>
    </div>
  );
}
