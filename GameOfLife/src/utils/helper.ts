import { NUM_COLS, NUM_ROWS } from "./constants";

export const createEmptyGrid = () => {
  return Array.from({ length: NUM_ROWS }).map(() =>
    Array.from({ length: NUM_COLS }).map(() => 0)
  );
};

export const randomizeGrid = () => {
  return Array.from({ length: NUM_ROWS }).map(() =>
    Array.from({ length: NUM_COLS }).map(() => (Math.random() > 0.7 ? 1 : 0))
  );
};

export const countNeighbors = ({
  grid,
  row,
  col
}: {
  grid: number[][];
  row: number;
  col: number;
}): number => {
  let neighbors = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue;
      const x = row + i;
      const y = col + j;
      if (x >= 0 && x < NUM_ROWS && y >= 0 && y < NUM_COLS) {
        neighbors += grid[x][y];
      }
    }
  }
  return neighbors;
};

export const updateGrid = ({ grid }: { grid: number[][] }): number[][] => {
  return grid.map((row, r) =>
    row.map((cell, c) => {
      const neighbors = countNeighbors({ grid, row: r, col: c });

      if (cell === 1 && (neighbors < 2 || neighbors > 3)) {
        return 0; // Cell dies
      } else if (cell === 0 && neighbors === 3) {
        return 1; // Cell becomes alive
      }
      return cell; // No change
    })
  );
};
