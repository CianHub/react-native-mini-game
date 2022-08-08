import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';

export const StartGameScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        keyboardType="number-pad"
        maxLength={2}
        style={styles.input}
        autoCapitalize={'none'}
        autoCorrect={false}
      />
      <View style={styles.buttonRow}>
        <View style={styles.buttonBox}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonBox}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 100,
    backgroundColor: '#4e0329',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 1,
    marginVertical: 8,
    color: '#ddb52f',
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
