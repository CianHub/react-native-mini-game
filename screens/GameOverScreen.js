import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../helpers/colors';

export const GameOverScreen = () => {
  return (
    <View style={styles.root}>
      <Title>Game Over</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <Text style={styles.text}>You needed X rounds to guess Y</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 200,
    overflow: 'hidden',
    borderWidth: 3,
    width: 400,
    height: 400,
    borderColor: Colors.primary800,
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  root: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
