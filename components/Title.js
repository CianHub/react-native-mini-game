import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors } from '../helpers/colors';

export const Title = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: Colors.accent500,
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
