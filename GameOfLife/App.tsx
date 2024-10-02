import React, { FC } from "react";
import GameOfLifeScreen from "./src/screens/GameOfLife";
import { GameOfLifeProvider } from "./src/contexts/GameOfLifeContext";

const App: FC = () => {
  return (
    <GameOfLifeProvider>
      <GameOfLifeScreen />
    </GameOfLifeProvider>
  );
};

export default App;
