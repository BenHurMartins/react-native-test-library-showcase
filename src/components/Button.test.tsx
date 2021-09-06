/**
 * @format
 */

import 'react-native';
import React from 'react';
import Button from './Button';
import {render, fireEvent, waitFor} from '../utils/test-utils';

describe('Button', () => {
  it('renders correctly', () => {
    const onPressMock = jest.fn();
    render(<Button onPress={onPressMock} title={'Test Button'} />);
  });
  it('should exec the passed function once', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <Button
        onPress={onPressMock}
        title={'Test Button'}
        testID={'testButton'}
      />,
    );
    const button = getByTestId('testButton');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
  it('should count two clicks', () => {
    const onPressMock = jest.fn();
    const {getByTestId} = render(
      <Button
        onPress={onPressMock}
        title={'Test Button'}
        testID={'testButton'}
      />,
    );
    const button = getByTestId('testButton');
    fireEvent.press(button);
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(2);
  });
});
