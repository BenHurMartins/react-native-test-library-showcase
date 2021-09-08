import {createSlice} from '@reduxjs/toolkit';
import Pokemon from '../../models/Pokemon';

export type PokemonState = {
  offset: number;
  pokemon: Pokemon | null;
  isFetchingPokemon: boolean;
  isFetchingPokemonList: boolean;
  pokemonList: Pokemon[];
};

export const INITIAL_STATE: PokemonState = {
  offset: 0,
  pokemon: null,
  isFetchingPokemon: false,
  isFetchingPokemonList: false,
  pokemonList: [],
};

const pokemonReducer = createSlice({
  name: 'pokemon',
  initialState: INITIAL_STATE,
  reducers: {
    startFetchingPokemon: state => {
      state.isFetchingPokemon = true;
    },
    fetchingPokemonCompleted: (state, action) => {
      state.isFetchingPokemon = false;
      state.pokemon = action.payload;
    },
    startFetchingPokemonList: state => {
      state.isFetchingPokemonList = true;
    },
    fetchingPokemonListCompleted: (state, action) => {
      state.isFetchingPokemonList = false;
      state.offset = state.offset + 20;
      state.pokemonList = [...state.pokemonList, ...action.payload];
    },
  },
});

export const {
  startFetchingPokemon,
  fetchingPokemonCompleted,
  startFetchingPokemonList,
  fetchingPokemonListCompleted,
} = pokemonReducer.actions;

export default pokemonReducer.reducer;
