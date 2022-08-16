import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../../helpers/colors';

export const InstructionText = ({ children, style }) => {
  return <Text style={[style, styles.instructionText]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 20,
    fontFamily: 'open-sans',
  },
});
