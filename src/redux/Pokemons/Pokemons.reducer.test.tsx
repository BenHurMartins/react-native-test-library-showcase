import Pokemon from '../../models/Pokemon';
import reducer, {
  PokemonState,
  fetchingPokemonListCompleted,
  startFetchingPokemonList,
  fetchingPokemonCompleted,
  INITIAL_STATE,
  startFetchingPokemon,
} from './Pokemons.reducer';

describe('Pokemon Reducer', () => {
  describe('startFetchingPokemon', () => {
    it('should set the state to true if the user is fetching a pokemon', () => {
      const expectedResult: PokemonState = {
        ...INITIAL_STATE,
        isFetchingPokemon: true,
      };
      expect(reducer(INITIAL_STATE, startFetchingPokemon)).toEqual(
        expectedResult,
      );
    });
  });
  describe('fetchingPokemonCompleted', () => {
    it('should add pokemon to the state and set isFetchingPokemon to false', () => {
      const pokemon: Pokemon = {
        avatar: 'www.image.com',
        name: 'Blastoise',
      };

      const expectedResult: PokemonState = {
        ...INITIAL_STATE,
        isFetchingPokemon: false,
        pokemon,
      };
      expect(reducer(INITIAL_STATE, fetchingPokemonCompleted(pokemon))).toEqual(
        expectedResult,
      );
    });
  });
  describe('startFetchingPokemonList', () => {
    it('should set the state to true if the user is fetching a pokemon list', () => {
      const expectedResult: PokemonState = {
        ...INITIAL_STATE,
        isFetchingPokemonList: true,
      };
      expect(reducer(INITIAL_STATE, startFetchingPokemonList)).toEqual(
        expectedResult,
      );
    });
  });
  describe('fetchingPokemonCompleted', () => {
    it('should set the state to true if the user is fetching a pokemon list', () => {
      const pokemonList: Pokemon[] = [
        {
          name: 'Blastoise',
          url: 'www.image.com',
        },
        {
          name: 'Charizard',
          url: 'www.image.com',
        },
      ];

      const expectedResult: PokemonState = {
        ...INITIAL_STATE,
        isFetchingPokemonList: false,
        pokemonList,
        offset: 20,
      };
      expect(
        reducer(INITIAL_STATE, fetchingPokemonListCompleted(pokemonList)),
      ).toEqual(expectedResult);
    });
  });
});
