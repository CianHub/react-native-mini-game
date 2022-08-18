import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Colors } from '../../helpers/colors';

export const GuessLogItem = ({ roundNumber, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
  },
});
