import React, { FC, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useGameOfLifeContext } from "../../contexts/GameOfLifeContext";
import ActionButton from "../ActionButton/ActionButton";

const Controls: FC = () => {
  const {
    running,
    setRunning,
    resetGrid,
    randomizeGridState,
    setIsInitialState
  } = useGameOfLifeContext();

  const handleStartStop = useCallback(() => {
    setRunning(!running);
    setIsInitialState(false);
  }, [running]);

  return (
    <View style={styles.controls}>
      <ActionButton
        text={running ? "Stop" : "Start"}
        onPress={handleStartStop}
      />
      <ActionButton text="Reset" onPress={resetGrid} />
      <ActionButton text="Randomize" onPress={randomizeGridState} />
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  }
});

export default Controls;
