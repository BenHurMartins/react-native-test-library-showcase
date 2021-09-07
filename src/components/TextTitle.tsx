import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';

export type TextProps = {
  testID?: string;
};

const TextTitle: FC<TextProps> = ({testID, children}) => {
  return (
    <Text style={styles.title} testID={testID ?? ''}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    padding: 5,
  },
});

export default TextTitle;
