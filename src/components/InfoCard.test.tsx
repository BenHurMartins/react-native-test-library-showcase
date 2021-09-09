/**
 * @format
 */

import 'react-native';
import React from 'react';
import InfoCard from './InfoCard';
import {render, waitForElementToBeRemoved, cleanup} from '../utils/test-utils';

const component = (show: boolean) => {
  return render(<InfoCard show={show} />);
};
afterEach(cleanup);
describe('InfoCard', () => {
  it('renders correctly', () => {
    component(true);
  });
  it('should select the InfoCard component', () => {
    const {getByText} = component(true);

    expect(getByText('Loading...')).toBeTruthy();
  });
  it('should return null after when the show props is false', async () => {
    let show = false;
    const {queryAllByText} = component(show);
    const expectedResult = await queryAllByText('Loading...');
    expect(expectedResult).toEqual([]);
  });
});
