import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const GameOverScreen = () => {
  return (
    <View>
      <Title>Game Over</Title>
      <Image
        source={require('../assets/images/success.png')}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({});
