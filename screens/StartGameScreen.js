import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';

export const StartGameScreen = () => {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <TextInput style={styles.input} />
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 100,
    backgroundColor: '#72063c',
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
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
});
