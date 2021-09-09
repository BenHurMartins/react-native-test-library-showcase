/**
 * @format
 */

import 'react-native';
import React from 'react';
import {ListItemPokemon} from './';
import {render} from '../utils/test-utils';
import Pokemon from '../models/Pokemon';

const component = (item: Pokemon) => {
  return render(<ListItemPokemon item={item} />);
};

const pokemon: Pokemon = {
  name: 'Shen Long',
  url: 'https://teste.teste.com/teste/teste/4',
};

describe('ListItemPokemon', () => {
  it('renders correctly', () => {
    component(pokemon);
  });
  it('should show exactly the same pokemon name', () => {
    const pokemonName = pokemon.name;
    const {getByText} = component(pokemon);
    const text = getByText(pokemon.name).props.children;
    expect(text).toEqual(pokemonName);
  });
  it('should have an image', () => {
    const {getByA11yRole} = component(pokemon);
    const avatar = getByA11yRole('image');
    expect(avatar).toBeTruthy();
  });
  it('should have an url in the image', () => {
    const {getByA11yRole} = component(pokemon);
    const avatar = getByA11yRole('image');
    expect(avatar.props.source.uri).toBeTruthy();
  });
});
