import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { GameScreen } from './screens/GameScreen';
import { Colors } from './helpers/colors';

export default function App() {
  const [num, setNum] = useState(null);

  const numHandler = (newNum) => setNum(newNum);

  let screen = num ? (
    <GameScreen chosenNumber={num} />
  ) : (
    <StartGameScreen numHandler={numHandler} num={num} />
  );

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
