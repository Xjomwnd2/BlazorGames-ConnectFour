import { useState } from "react";

export default function App() {
  const rows = 6;
  const cols = 7;

  const [board, setBoard] = useState(
    Array(rows).fill(null).map(() => Array(cols).fill(null))
  );

  return (
    <div style={{ padding: 20 }}>
      <h1>Connect 4</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, 60px)`,
          gap: "5px",
          background: "#0077cc",
          padding: "10px",
          borderRadius: "10px",
        }}
      >
        {board.flat().map((cell, index) => (
          <div
            key={index}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: cell === "R" ? "red" : cell === "Y" ? "yellow" : "white",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
