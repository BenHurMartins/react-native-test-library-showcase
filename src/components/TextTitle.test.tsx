/**
 * @format
 */

import 'react-native';
import React from 'react';
import {TextTitle} from './';
import {render, fireEvent, waitFor} from '../utils/test-utils';

describe('TextTitle', () => {
  it('renders correctly', () => {
    const onPressMock = jest.fn();
    render(<TextTitle>Test Title</TextTitle>);
  });
  it('should show exactly the passed text', () => {
    const passedText = 'Test Title';
    const {getByText} = render(<TextTitle>{passedText}</TextTitle>);
    const text = getByText('Test Title').props.children;
    expect(text).toEqual(passedText);
  });
});
