import React from 'react';
import { Text, StyleSheet } from 'react-native';

export const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
    borderWidth: 2,
    borderColor: 'white',
    padding: 12,
    fontFamily: 'open-sans-bold',
  },
});
