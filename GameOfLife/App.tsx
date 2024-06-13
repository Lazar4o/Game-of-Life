import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Controls from "./src/components/Controls";
import Grid from "./src/components/Grid";
import useGameOfLife from "./src/hooks/useGameOfLife";

const App = () => {
  const {
    grid,
    running,
    generation,
    isInitialState,
    setRunning,
    toggleCellState,
    resetGrid,
    randomizeGridState,
    setIsInitialState
  } = useGameOfLife();

  return (
    <View style={styles.container}>
      <Text>Generation: {generation}</Text>
      <Grid
        grid={grid}
        toggleCellState={toggleCellState}
        isDisabled={!isInitialState ?? false}
      />
      <Controls
        running={running}
        setRunning={setRunning}
        resetGrid={resetGrid}
        randomizeGridState={randomizeGridState}
        setIsInitialState={setIsInitialState}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50
  }
});

export default App;
