import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";
import { createEmptyGrid, randomizeGrid, updateGrid } from "../utils/helper";

interface GameOfLifeContextProps {
  grid: number[][];
  running: boolean;
  generation: number;
  isInitialState: boolean;
  setRunning: (running: boolean) => void;
  resetGrid: () => void;
  toggleCellState: (row: number, col: number) => void;
  randomizeGridState: () => void;
  setIsInitialState: (isInitial: boolean) => void;
}

const GameOfLifeContext = createContext<GameOfLifeContextProps | undefined>(
  undefined
);

export const GameOfLifeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [grid, setGrid] = useState<number[][]>(createEmptyGrid);
  const [running, setRunning] = useState<boolean>(false);
  const [generation, setGeneration] = useState<number>(0);
  const [isInitialState, setIsInitialState] = useState<boolean>(true);

  const runGame = useCallback((grid: number[][]): number[][] => {
    return updateGrid({ grid });
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

  return (
    <GameOfLifeContext.Provider
      value={{
        grid,
        running,
        generation,
        isInitialState,
        setRunning,
        resetGrid,
        toggleCellState,
        randomizeGridState,
        setIsInitialState
      }}
    >
      {children}
    </GameOfLifeContext.Provider>
  );
};

export const useGameOfLifeContext = () => {
  const context = useContext(GameOfLifeContext);
  if (!context) {
    throw new Error(
      "useGameOfLifeContext must be used within a GameOfLifeProvider"
    );
  }
  return context;
};
