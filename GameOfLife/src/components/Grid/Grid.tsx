import React, { FC, useMemo } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useGameOfLifeContext } from "../../contexts/GameOfLifeContext";
import GridCell from "../GridCell/GridCell";

const Grid: FC = () => {
  const { grid, isInitialState, toggleCellState } = useGameOfLifeContext();

  const isDisabled = useMemo(() => !isInitialState ?? false, [isInitialState]);

  return (
    <View style={styles.grid}>
      {grid.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((cell, colIndex) => (
            <GridCell
              key={colIndex}
              cell={cell}
              rowIndex={rowIndex}
              colIndex={colIndex}
              isDisabled={isDisabled}
              toggleCellState={toggleCellState}
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
