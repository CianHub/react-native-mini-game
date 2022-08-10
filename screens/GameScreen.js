import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from '../components/Title';

export const GameScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Title title={"Opponent's Score"} />
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
