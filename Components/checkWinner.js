export function checkWinner(board) {
  const directions = [
    [0, 1],  // horizontal
    [1, 0],  // vertical
    [1, 1],  // diagonal down-right
    [1, -1]  // diagonal down-left
  ];

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[0].length; c++) {
      const player = board[r][c];
      if (!player) continue;

      for (let [dr, dc] of directions) {
        let count = 1;

        for (let k = 1; k < 4; k++) {
          const nr = r + dr * k;
          const nc = c + dc * k;
          if (
            nr < 0 ||
            nr >= board.length ||
            nc < 0 ||
            nc >= board[0].length ||
            board[nr][nc] !== player
          ) {
            break;
          }
          count++;
        }

        if (count === 4) return player;
      }
    }
  }

  return null;
}