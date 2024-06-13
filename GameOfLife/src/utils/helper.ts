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
