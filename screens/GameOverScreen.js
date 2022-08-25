import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  useWindowDimensions,
} from 'react-native';
import { Colors } from '../helpers/colors';
import { PrimaryButton } from '../components/UI/PrimaryButton';
import { Title } from '../components/UI/Title';

export const GameOverScreen = ({
  roundsNumber,
  userNumber,
  onStartNewGame,
}) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <View style={styles.root}>
      <Title title={'Game Over'} />
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          resizeMode="cover"
          style={[imageStyle, styles.image]}
        />
      </View>
      <Text style={styles.summaryText}>
        You needed <Text style={styles.highlightText}>{roundsNumber}</Text>{' '}
        rounds to guess
        <Text style={styles.highlightText}>{` ${userNumber}`}</Text>
      </Text>
      <PrimaryButton pressHandler={onStartNewGame}>NEW GAME</PrimaryButton>
    </View>
  );
};

//const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  imageContainer: {
    overflow: 'hidden',
    borderWidth: 3,
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
    width: '100%',
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
