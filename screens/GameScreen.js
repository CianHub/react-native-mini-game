import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Title } from '../components/title';

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
