import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

export const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    borderWidth: Platform.OS == 'android' ? 2 : 0,
    borderColor: 'white',
    padding: 12,
    fontFamily: 'open-sans-bold',
    width: 300,
    marginBottom: 12,
    maxWidth: '80%',
  },
});
