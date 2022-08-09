import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const GameScreen = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});
