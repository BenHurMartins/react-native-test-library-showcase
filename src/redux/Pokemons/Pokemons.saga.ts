import {select, call, put, takeEvery} from '@redux-saga/core/effects';
import {AnyAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  fetchingPokemonCompleted,
  fetchingPokemonListCompleted,
  startFetchingPokemon,
  startFetchingPokemonList,
} from './Pokemons.reducer';
import {selectOffset} from './Pokemons.selectors';
import {selectCount} from '../Numbers/Numbers.selectors';
import Pokemon from '../../models/Pokemon';

function* getPokemonSaga(): Generator<AnyAction, void, string> {
  const pokemonUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  const pokemonId: string = yield select(selectCount);
  try {
    const rawPokemonData: any = yield call(
      axios.get,
      `${pokemonUrl}${pokemonId}`,
    );
    const pokemon: Pokemon = {
      name: rawPokemonData.data.name,
      avatar: rawPokemonData.data.sprites.front_default,
    };
    yield put(fetchingPokemonCompleted(pokemon));
  } catch (error) {
    console.log(error);
  }
}
function* getPokemonListSaga(): Generator<AnyAction, void, string> {
  const offset: string = yield select(selectOffset);
  const pokemonListUrl: string = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;
  try {
    const rawPokemonListData: any = yield call(axios.get, `${pokemonListUrl}`);
    const pokemonList: Pokemon[] = rawPokemonListData.data.results;
    yield put(fetchingPokemonListCompleted(pokemonList));
  } catch (error) {
    console.log(error);
  }
}

export function* pokemonsRootSaga() {
  yield takeEvery(startFetchingPokemon.type, getPokemonSaga);
  yield takeEvery(startFetchingPokemonList, getPokemonListSaga);
}
