import React, {FC, ReactNode} from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export type ButtonProps = {
  onPress: () => void;
  title: string;
  testID?: string;
};

const ButtonComponent: FC<ButtonProps> = ({onPress, title, testID}) => {
  return <Button onPress={onPress} title={title} testID={testID ?? ''} />;
};

export default ButtonComponent;
