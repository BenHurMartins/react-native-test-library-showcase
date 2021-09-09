/**
 * @format
 */

import 'react-native';
import React from 'react';
import List from './List';
import {
  render,
  waitFor,
  fireEvent,
  waitForElementToBeRemoved,
  cleanup,
  act,
} from '../../utils/test-utils';

const component = () => render(<List />);

afterEach(cleanup);
describe('List', () => {
  it('should fetch more than 1 element on loading', async () => {
    await act(async () => {});
    const {findAllByTestId} = component();
    const items = await findAllByTestId(/listItemPokemon/);

    //There is a limit of 10 elements in each query, believe me
    await waitFor(() => expect(items.length).toEqual(10));
  });
  it('should fetch more pokemons when the list scrolls near to end', async () => {
    const {findAllByTestId, getByTestId} = component();
    const list = getByTestId('pokemonList');
    await act(async () => {});
    fireEvent.scroll(list, {
      nativeEvent: {
        contentSize: {height: 600, width: 400},
        contentOffset: {y: 200},
        layoutMeasurement: {height: 100, width: 100},
      },
    });
    const items = await findAllByTestId(/listItemPokemon2[0-9]/);
    await waitFor(() => expect(items.length).toEqual(10));
  });
  it('should show loading new elements component then hide it', async () => {
    const {getByText} = component();
    await act(async () => {});
    await waitFor(() => expect(getByText('Loading...')).toBeTruthy());
    //then...
    await waitForElementToBeRemoved(() => getByText('Loading...'), {
      timeout: 5000,
    });
  });
});
