import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Controls from "../components/Controls/Controls";
import Grid from "../components/Grid/Grid";
import { useGameOfLifeContext } from "../contexts/GameOfLifeContext";

const GameOfLifeScreen = () => {
  const { generation } = useGameOfLifeContext();

  return (
    <View style={styles.container}>
      <Text>Generation: {generation}</Text>
      <Grid />
      <Controls />
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

export default GameOfLifeScreen;
