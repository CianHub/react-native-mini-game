import { ImageBackground, StyleSheet, SafeAreaView } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { GameScreen } from './screens/GameScreen';

export default function App() {
  const [num, setNum] = useState(null);

  const numHandler = (newNum) => setNum(newNum);

  let screen = num ? (
    <GameScreen num={num} />
  ) : (
    <StartGameScreen numHandler={numHandler} />
  );

  return (
    <LinearGradient style={styles.rootScreen} colors={['#ddb52f', '#3b012f']}>
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
