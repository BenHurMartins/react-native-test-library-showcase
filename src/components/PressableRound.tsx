import React, {FC} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

export type PressableProps = {
  onPress: () => void;
  title: string;
  testID?: string;
};

const PressableRound: FC<PressableProps> = ({onPress, title, testID}) => {
  return (
    <Pressable
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
});

export default PressableRound;
