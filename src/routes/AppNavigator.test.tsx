import 'react-native-gesture-handler';
import * as React from 'react';
import {render, fireEvent, waitFor, cleanup, act} from '../utils/test-utils';

import AppNavigator from './AppNavigator';

afterEach(cleanup);

describe('Testing react navigation', () => {
  it('should present the home screen', async () => {
    const {getByTestId} = render(<AppNavigator />);
    const labelCurrentCount = getByTestId('labelCurrentCount');
    await act(async () => {});
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
    const showPokemonDetailButton = getByTestId('showPokemonDetail');
    fireEvent.press(showPokemonDetailButton);
    await act(async () => {});
    const headerDetail = await findByText('Detail');
    expect(headerDetail).toBeTruthy();
  });
});
