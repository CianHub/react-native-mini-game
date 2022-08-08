import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export const PrimaryButton = ({ children, pressHandler }) => {
  return (
    <Pressable onPress={pressHandler}>
      <View style={styles.container}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#72063c',
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    margin: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
