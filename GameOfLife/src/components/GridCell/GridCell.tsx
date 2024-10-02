import React, { FC } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";

interface GridCellProps {
  cell: number;
  rowIndex: number;
  colIndex: number;
  isDisabled: boolean;
  toggleCellState: (row: number, col: number) => void;
}

const GridCell: FC<GridCellProps> = ({
  cell,
  rowIndex,
  colIndex,
  isDisabled,
  toggleCellState
}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      style={[styles.cell, { backgroundColor: cell ? "black" : "white" }]}
      onPress={() => toggleCellState(rowIndex, colIndex)}
    />
  );
};

const styles = StyleSheet.create({
  cell: {
    width: 19,
    height: 19,
    borderWidth: 1,
    borderColor: "gray"
  }
});

export default React.memo(GridCell);
