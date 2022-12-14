import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import { Card } from '../components/UI/Card';
import { InstructionText } from '../components/UI/InstructionText';
import { PrimaryButton } from '../components/UI/PrimaryButton';
import { Title } from '../components/UI/Title';
import { Colors } from '../helpers/colors';

export const StartGameScreen = ({ numHandler }) => {
  const [val, setVal] = useState('');
  const { width, height } = useWindowDimensions();

  const inputHandler = (newVal) => {
    setVal(newVal);
  };

  const saveHandler = () => {
    const chosenNumber = parseInt(val);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Please enter a valid number between 1 and 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetHandler }]
      );
      return;
    }
    numHandler(chosenNumber);
    resetHandler();
  };

  const resetHandler = () => {
    setVal('');
  };

  const marginTop = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behaviour="position">
        <View style={[styles.root, { marginTop: marginTop }]}>
          <Title title={'Guess my number'} />
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              onChangeText={inputHandler}
              value={val}
              keyboardType="number-pad"
              maxLength={2}
              style={styles.input}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
            <View style={styles.buttonRow}>
              <View style={styles.buttonBox}>
                <PrimaryButton pressHandler={resetHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonBox}>
                <PrimaryButton pressHandler={saveHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: 'center' },
  screen: { flex: 1 },
  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 1,
    marginVertical: 8,
    color: Colors.accent500,
    fontWeight: 'bold',
    width: 50,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
  },
  buttonBox: {
    flex: 1,
  },
});
