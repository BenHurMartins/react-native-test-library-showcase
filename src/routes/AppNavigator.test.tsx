import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {render, fireEvent, waitFor} from '../utils/test-utils';

import AppNavigator from './AppNavigator';

describe('Testing react navigation', () => {
  it('should present the home screen', () => {
    const {getByTestId} = render(<AppNavigator />);
    const labelCurrentCount = getByTestId('labelCurrentCount');

    expect(labelCurrentCount).toBeTruthy();
  });
  it('should navigate to Detail screen after fetching a pokemon', async () => {
    const {getByTestId, findByText} = render(<AppNavigator />);

    //Preparing to fetch
    const incrementButton = getByTestId('incrementCount');
    const getPokemonButton = getByTestId('getPokemon');
    const count = getByTestId('count');
    const pokemonImage = getByTestId('pokemonImage');
    //incrementing
    fireEvent.press(incrementButton);
    expect(count.props.children).toBeGreaterThan(0);
    //fetching pokemon
    fireEvent.press(getPokemonButton);
    await waitFor(() => expect(pokemonImage.props.source.uri).toBeTruthy());
    //navigating to detail screen
    const showPokemonDetailButton = await getByTestId('showPokemonDetail');
    fireEvent.press(showPokemonDetailButton);

    const headerDetail = await findByText('Detail');
    expect(headerDetail).toBeTruthy();
  });
});