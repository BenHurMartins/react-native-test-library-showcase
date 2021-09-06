/**
 * @format
 */

import 'react-native';
import React from 'react';
import Pressable from './Pressable';
import {render, fireEvent, FireEventFunction} from '../utils/test-utils';

describe('Button', () => {
  it('renders correctly', () => {
    const onPressMock = jest.fn();
    render(<Pressable onPress={onPressMock} title={'Test Pressable'} />);
  });
  it('should exec the passed function once', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <Pressable
        onPress={onPressMock}
        title={'Test Pressable'}
        testID={'testPressable'}
      />,
    );
    const pressable = getByTestId('testPressable');
    fireEvent.press(pressable);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
  it('should count two clicks', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <Pressable
        onPress={onPressMock}
        title={'Test Pressable'}
        testID={'testPressable'}
      />,
    );
    const pressable = getByTestId('testPressable');
    fireEvent.press(pressable);
    fireEvent.press(pressable);
    expect(onPressMock).toHaveBeenCalledTimes(2);
  });
});
