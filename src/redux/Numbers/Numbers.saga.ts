import {select, call, put, takeEvery} from '@redux-saga/core/effects';
import {AnyAction} from '@reduxjs/toolkit';
import axios from 'axios';
import {
  fetchingPokemonCompleted,
  startFetchingPokemon,
} from './Numbers.reducer';
import {selectCount} from './Numbers.selectors';
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

export function* numbersRootSaga() {
  yield takeEvery(startFetchingPokemon.type, getPokemonSaga);
}
