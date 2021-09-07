import React, {FC} from 'react';
import {Button} from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  title: string;
  testID?: string;
};

const ButtonComponent: FC<ButtonProps> = ({onPress, title, testID}) => {
  return <Button onPress={onPress} title={title} testID={testID ?? ''} />;
};

export default ButtonComponent;
