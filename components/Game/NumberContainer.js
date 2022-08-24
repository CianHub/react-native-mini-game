import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Colors } from '../../helpers/colors';

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWidth = Dimensions.get('window').width;

const space = deviceWidth < 380 ? 12 : 24;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: space,
    margin: space,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 24 : 36,
    fontFamily: 'open-sans-bold',
  },
});
