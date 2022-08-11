import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { NumberContainer } from '../components/Game/NumberContainer';
import { Title } from '../components/UI/Title';
import { PrimaryButton } from '../components/UI/PrimaryButton';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;
export const GameScreen = ({ chosenNumber, gameOverHandler }) => {
  const initalGuess = generateRandomBetween(
    minBoundary,
    maxBoundary,
    chosenNumber
  );
  const [currentGuess, setCurrentGuess] = React.useState(initalGuess);

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      gameOverHandler();
    }
  }, [currentGuess, chosenNumber, gameOverHandler]);

  const buttonHandler = (direction) => {
    if (
      (direction === 'lower' && currentGuess < chosenNumber) ||
      (direction === 'higher' && currentGuess > chosenNumber)
    ) {
      Alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else if (direction === 'greater') {
      minBoundary = currentGuess + 1;
    }
    setCurrentGuess(
      generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    );
  };

  return (
    <View style={styles.container}>
      <Title title={"Opponent's Score"} />
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <PrimaryButton pressHandler={buttonHandler.bind(this, 'greater')}>
          +
        </PrimaryButton>
        <PrimaryButton pressHandler={buttonHandler.bind(this, 'lower')}>
          -
        </PrimaryButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
