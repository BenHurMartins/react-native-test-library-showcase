import {RootState} from '../../store';

export const selectPokemon = (state: RootState) => state.pokemon.pokemon;
export const selectOffset = (state: RootState) => state.pokemon.offset;
export const selectPokemonList = (state: RootState) =>
  state.pokemon.pokemonList;
export const selectIsFetchingPokemonList = (state: RootState) =>
  state.pokemon.isFetchingPokemonList;
