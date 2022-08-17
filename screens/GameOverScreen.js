import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../helpers/colors';
import { PrimaryButton } from '../components/UI/PrimaryButton';

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
      <Text style={styles.summaryText}>
        You needed <Text style={styles.highlightText}>X</Text> rounds to guess
        <Text style={styles.highlightText}>Y</Text>
      </Text>
      <PrimaryButton title="NEW GAME" onPress={() => {}} />
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
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highlightText: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary800,
  },
});
