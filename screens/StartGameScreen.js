import React from 'react';
import { TextInput, View } from 'react-native';
import { PrimaryButton } from '../components/PrimaryButton';

export const StartGameScreen = () => {
  return (
    <View>
      <TextInput />
      <PrimaryButton textValue={'Reset'} />
      <PrimaryButton textValue={'Confirm'} />
    </View>
  );
};
