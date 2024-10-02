import React, { FC, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { useGameOfLifeContext } from "../../contexts/GameOfLifeContext";
import ActionButton from "../ActionButton/ActionButton";
import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

const Controls: FC = () => {
  const {
    running,
    setRunning,
    resetGrid,
    randomizeGridState,
    setIsInitialState
  } = useGameOfLifeContext();

  const handleStartStop = useCallback(
    throttle(() => {
      setRunning(!running);
      setIsInitialState(false);
    }, 300),
    [running]
  );

  const handleReset = useCallback(
    debounce(() => {
      resetGrid();
    }, 100),
    [resetGrid]
  );

  const handleRandomize = useCallback(
    debounce(() => {
      randomizeGridState();
    }, 100),
    [randomizeGridState]
  );

  return (
    <View style={styles.controls}>
      <ActionButton
        text={running ? "Stop" : "Start"}
        onPress={handleStartStop}
      />
      <ActionButton text="Reset" onPress={handleReset} />
      <ActionButton text="Randomize" onPress={handleRandomize} />
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
