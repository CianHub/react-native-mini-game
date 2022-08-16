import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { GameScreen } from './screens/GameScreen';
import { Colors } from './helpers/colors';
import { GameOverScreen } from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [num, setNum] = useState(null);
  const [gameOver, setGameOver] = useState(true);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const gameOverHandler = () => {
    setGameOver(true);
  };

  const numHandler = (newNum) => {
    setNum(newNum);
    setGameOver(false);
  };

  let screen = num ? (
    <GameScreen chosenNumber={num} gameOverHandler={gameOverHandler} />
  ) : (
    <StartGameScreen numHandler={numHandler} num={num} />
  );

  if (gameOver && num) {
    screen = <GameOverScreen />;
  }

  return (
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
