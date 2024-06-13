import { useCallback, useEffect, useState } from "react";
import { NUM_COLS, NUM_ROWS } from "../utils/constants";
import { createEmptyGrid, randomizeGrid } from "../utils/helper";

const useGameOfLife = () => {
  const [grid, setGrid] = useState<number[][]>(createEmptyGrid);
  const [running, setRunning] = useState<boolean>(false);
  const [generation, setGeneration] = useState<number>(0);
  const [isInitialState, setIsInitialState] = useState<boolean>(true);

  const runGame = useCallback((grid: number[][]): number[][] => {
    const newGrid = grid.map((arr) => [...arr]);

    for (let row = 0; row < NUM_ROWS; row++) {
      for (let col = 0; col < NUM_COLS; col++) {
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

        if (grid[row][col] === 1 && (neighbors < 2 || neighbors > 3)) {
          newGrid[row][col] = 0;
        } else if (grid[row][col] === 0 && neighbors === 3) {
          newGrid[row][col] = 1;
        }
      }
    }

    return newGrid;
  }, []);

  const toggleCellState = useCallback((row: number, col: number) => {
    setGrid((prevGrid) =>
      prevGrid.map((arr, r) =>
        arr.map((cell, c) => (r === row && c === col ? (cell ? 0 : 1) : cell))
      )
    );
  }, []);

  const resetGrid = useCallback(() => {
    setGrid(createEmptyGrid());
    setGeneration(0);
    setRunning(false);
    setIsInitialState(true);
  }, []);

  const randomizeGridState = useCallback(() => {
    setGrid(randomizeGrid());
  }, []);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setGrid((g) => {
        const nextGrid = runGame(g);
        setGeneration((gen) => gen + 1);
        return nextGrid;
      });
    }, 500);
    return () => clearInterval(interval);
  }, [running, runGame]);

  return {
    grid,
    running,
    generation,
    isInitialState,
    setRunning,
    resetGrid,
    toggleCellState,
    randomizeGridState,
    setIsInitialState
  };
};

export default useGameOfLife;
