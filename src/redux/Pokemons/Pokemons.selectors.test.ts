import {RootState} from '../../store';
import {
  selectPokemonList,
  selectPokemon,
  selectOffset,
} from './Pokemons.selectors';
import {INITIAL_STATE} from './Pokemons.reducer';
import {INITIAL_STATE as INITIAL_STATE_NUMBERS} from '../Numbers/Numbers.reducer';
import Pokemon from '../../models/Pokemon';

describe('Number Selectors', () => {
  describe('selectOffset', () => {
    it('should retrieve the count from the application state', () => {
      const state: RootState = {
        number: {...INITIAL_STATE_NUMBERS},
        pokemon: {
          ...INITIAL_STATE,
          offset: 20,
        },
      };
      expect(selectOffset(state)).toEqual(20);
    });
  });
  describe('selectPokemon', () => {
    it('should retrieve the count from the application state', () => {
      const pokemon: Pokemon = {
        name: 'Jeff',
        avatar: 'image.com',
      };
      const state: RootState = {
        number: {...INITIAL_STATE_NUMBERS},
        pokemon: {
          ...INITIAL_STATE,
          pokemon: pokemon,
        },
      };
      expect(selectPokemon(state)).toEqual(pokemon);
    });
  });
  describe('selectPokemonList', () => {
    it('should retrieve the pokemon from the application state', () => {
      const pokemonList: Pokemon[] = [
        {
          name: 'Jeff',
          url: 'image.com',
        },
      ];
      const state: RootState = {
        number: {...INITIAL_STATE_NUMBERS},
        pokemon: {
          ...INITIAL_STATE,
          pokemonList: pokemonList,
        },
      };
      expect(selectPokemonList(state)).toEqual(pokemonList);
    });
  });
});
