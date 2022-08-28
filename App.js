import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { GameScreen } from './screens/GameScreen';
import { Colors } from './helpers/colors';
import { GameOverScreen } from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [num, setNum] = useState(null);
  const [gameOver, setGameOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const gameOverHandler = (numberOfRounds) => {
    setGameOver(true);
    setGuessRounds(numberOfRounds);
  };

  const numHandler = (newNum) => {
    setNum(newNum);
    setGameOver(false);
  };

  const startGameHandler = () => {
    setNum(null);
    setGuessRounds(0);
  };

  let screen = num ? (
    <GameScreen
      userNumber={num}
      onGameOver={gameOverHandler}
      setGuessRoundNum={setGuessRounds}
    />
  ) : (
    <StartGameScreen numHandler={numHandler} num={num} />
  );

  if (gameOver && num) {
    screen = (
      <GameOverScreen
        userNumber={num}
        roundsNumber={guessRounds}
        onStartNewGame={startGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        style={styles.rootScreen}
        colors={[Colors.primary700, Colors.accent500]}
      >
        <ImageBackground
          style={styles.img}
          source={require('./assets/images/background.png')}
          resizeMode={'cover'}
          imageStyle={{ opacity: 0.15 }}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  img: {
    flex: 1,
  },
});
