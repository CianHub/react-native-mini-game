import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export const PrimaryButton = ({ children, pressHandler }) => {
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        style={styles.container}
        onPress={pressHandler}
        android_ripple={{ color: '#640233' }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonOuter: { borderRadius: 28, margin: 4, overflow: 'hidden' },
});
