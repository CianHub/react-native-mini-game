import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title } from '../components/Title';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
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
