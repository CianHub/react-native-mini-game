import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../helpers/colors';

export const PrimaryButton = ({ children, pressHandler }) => {
  return (
    <View style={styles.buttonOuter}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.pressed, styles.container] : styles.container
        }
        onPress={pressHandler}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
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
  pressed: {
    opacity: 0.75,
  },
});
