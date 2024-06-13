import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

interface ControlsProps {
  running: boolean;
  setIsInitialState: (isInitialState: boolean) => void;
  setRunning: (running: boolean) => void;
  resetGrid: () => void;
  randomizeGridState: () => void;
}

const Controls = ({
  running,
  setRunning,
  resetGrid,
  randomizeGridState,
  setIsInitialState
}: ControlsProps) => {
  return (
    <View style={styles.controls}>
      <TouchableOpacity
        onPress={() => {
          setIsInitialState(false);
          setRunning(!running);
        }}
        style={styles.actionButton}
      >
        <Text>{running ? "Stop" : "Start"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.actionButton} onPress={resetGrid}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.actionButton}
        onPress={randomizeGridState}
      >
        <Text>Randomize</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%"
  },
  actionButton: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  }
});

export default Controls;
