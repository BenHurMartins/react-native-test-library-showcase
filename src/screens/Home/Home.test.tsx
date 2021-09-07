/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from './Home';
import {render, fireEvent, waitFor} from '../../utils/test-utils';

import {NavigationContainer} from '@react-navigation/native';

const homeComponent = (
  <NavigationContainer>
    <Home />
  </NavigationContainer>
);

describe('Home', () => {
  it('renders correctly', () => {
    render(homeComponent);
  });
  it('should increment count after clicking increment button', () => {
    jest.mock('@react-navigation/native', () => ({
      useNavigation: () => jest.fn(),
    }));
    const {getByTestId} = render(homeComponent);

    const incrementButton = getByTestId('incrementCount');
    const count = getByTestId('count');
    fireEvent.press(incrementButton);

    expect(count.props.children).toEqual(1);
  });
  it('should decrement count after clicking decrement button', () => {
    const {getByTestId} = render(homeComponent);

    const decrementButton = getByTestId('decrementCount');
    const count = getByTestId('count');
    fireEvent.press(decrementButton);

    //The Previous state was 1
    expect(count.props.children).toEqual(0);
  });
  it('should retrieve a pokemon image after clicking get pokemon', async () => {
    const {getByTestId} = render(homeComponent);

    const incrementButton = getByTestId('incrementCount');
    const getPokemonButton = getByTestId('getPokemon');
    const count = getByTestId('count');
    const pokemonImage = getByTestId('pokemonImage');
    fireEvent.press(incrementButton);

    expect(count.props.children).toBeGreaterThan(0);

    fireEvent.press(getPokemonButton);

    //Before the api fetch the uri source of iamge component is undefined
    //After the success fetching the uri should start with: http
    await waitFor(() => expect(pokemonImage.props.source.uri).toBeTruthy());
    await waitFor(() =>
      expect(pokemonImage.props.source.uri).toMatch(
        new RegExp(
          `^https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${count.props.children}`,
          'i',
        ),
      ),
    );
  });
});
