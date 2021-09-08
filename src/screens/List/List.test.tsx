/**
 * @format
 */

import 'react-native';
import React from 'react';
import List from './List';
import {render, waitFor, fireEvent} from '../../utils/test-utils';

const component = () => render(<List />);

describe('List', () => {
  it('renders correctly', () => {
    component;
  });
  it('should fetch more than 1 element on loading', async () => {
    const {findAllByTestId} = component();
    const items = await findAllByTestId(/listItemPokemon/);

    //There is a limit of 10 elements in each query, believe me
    await waitFor(() => expect(items.length).toEqual(10));
  });
  it('should fetch more pokemons when the list scrolls near to end', async () => {
    const {findAllByTestId, getByTestId} = component();
    const list = getByTestId('pokemonList');

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
});
