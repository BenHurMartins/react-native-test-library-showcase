/**
 * @format
 */

import 'react-native';
import React from 'react';
import PressableRound from './PressableRound';
import {render, fireEvent} from '../utils/test-utils';

describe('Button', () => {
  it('renders correctly', () => {
    const onPressMock = jest.fn();
    render(<PressableRound onPress={onPressMock} title={'P'} />);
  });
  it('should exec the passed function once', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <PressableRound
        onPress={onPressMock}
        title={'P'}
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
      <PressableRound
        onPress={onPressMock}
        title={'P'}
        testID={'testPressable'}
      />,
    );
    const pressable = getByTestId('testPressable');
    fireEvent.press(pressable);
    fireEvent.press(pressable);
    expect(onPressMock).toHaveBeenCalledTimes(2);
  });
});
