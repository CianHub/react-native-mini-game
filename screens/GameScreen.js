import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const GameScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Opponent Guess</Text>
      <View>
        <Text>Higher or Lower?</Text>
        <Text>Higher</Text>
        <Text>Lower</Text>
      </View>
      <View>Log Rounds</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
