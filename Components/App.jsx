import { useState } from "react";
import { checkWinner } from "./Components/checkWinner";

export default function App() {
  const rows = 6;
  const cols = 7;

  const [board, setBoard] = useState(
    Array(rows).fill(null).map(() => Array(cols).fill(null))
  );

  const [currentPlayer, setCurrentPlayer] = useState("R");
  const [winner, setWinner] = useState(null);

  const dropPiece = (col) => {
    if (winner) return;  // Stop game if someone already won

    // Find the lowest empty row in this column
    for (let row = rows - 1; row >= 0; row--) {
      if (board[row][col] === null) {
        const newBoard = board.map((r) => [...r]);
        newBoard[row][col] = currentPlayer;

        setBoard(newBoard);

        const result = checkWinner(newBoard);
        if (result) {
          setWinner(result);
        } else {
          setCurrentPlayer(currentPlayer === "R" ? "Y" : "R");
        }

        return;
      }
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Connect 4</h1>

      {winner ? (
        <h2 style={{ color: "green" }}>
          Winner: {winner === "R" ? "Red" : "Yellow"} 🎉
        </h2>
      ) : (
        <h2>Current Player: {currentPlayer === "R" ? "Red" : "Yellow"}</h2>
      )}

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
        {board.map((row, rIndex) =>
          row.map((cell, cIndex) => (
            <div
              key={`${rIndex}-${cIndex}`}
              onClick={() => dropPiece(cIndex)}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                cursor: "pointer",
                background:
                  cell === "R"
                    ? "red"
                    : cell === "Y"
                    ? "yellow"
                    : "white",
              }}
            ></div>
          ))
        )}
      </div>
    </div>
  );
}
