// src/components/ActionButton.tsx

import React, { FC } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ActionButtonProps {
  text: string;
  onPress: () => void;
}

const ActionButton: FC<ActionButtonProps> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.actionButton}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  actionButton: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  }
});

export default ActionButton;
