import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

interface GridProps {
  grid: number[][];
  toggleCellState: (row: number, col: number) => void;
  isDisabled: boolean;
}

const Grid = ({ grid, toggleCellState, isDisabled }: GridProps) => {
  return (
    <View style={styles.grid}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <TouchableOpacity
              disabled={isDisabled}
              key={colIndex}
              style={[
                styles.cell,
                { backgroundColor: cell ? "black" : "white" }
              ]}
              onPress={() => toggleCellState(rowIndex, colIndex)}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  grid: {
    marginBottom: 20
  },
  row: {
    flexDirection: "row"
  },
  cell: {
    width: 19,
    height: 19,
    borderWidth: 1,
    borderColor: "gray"
  }
});

export default Grid;
