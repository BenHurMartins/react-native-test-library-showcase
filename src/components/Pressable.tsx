import React, {FC, ReactNode} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export type PressableProps = {
  onPress: () => void;
  title: string;
  testID?: string;
};

const PressableComponent: FC<PressableProps> = ({onPress, title, testID}) => {
  return (
    <Pressable
      onFocus={() => console.log('Focused')}
      onBlur={() => console.log('Bl;ured')}
      onPress={onPress}
      testID={testID ?? ''}
      style={({pressed}) => [
        {
          backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'rgb(12, 112, 237)',
        },
        styles.button,
      ]}>
      <Text style={styles.buttonTitle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PressableComponent;