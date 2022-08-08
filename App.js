import { ImageBackground, StyleSheet, Text } from 'react-native';
import { StartGameScreen } from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <LinearGradient style={styles.rootScreen} colors={['#ddb52f', '#3b012f']}>
      <ImageBackground
        style={styles.img}
        source={require('./assets/images/background.png')}
        resizeMode={'cover'}
        imageStyle={{ opacity: 0.15 }}
      >
        <StartGameScreen />
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
