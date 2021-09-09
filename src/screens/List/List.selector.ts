import {createStructuredSelector} from 'reselect';
import Pokemon from '../../models/Pokemon';
import {
  selectPokemonList,
  selectIsFetchingPokemonList,
} from '../../redux/Pokemons/Pokemons.selectors';
import {RootState} from '../../store';

type ListScreenData = {
  pokemonList: Pokemon[] | null;
  isFetchingPokemonList: boolean;
};

const listScreenSelector = createStructuredSelector<RootState, ListScreenData>({
  pokemonList: selectPokemonList,
  isFetchingPokemonList: selectIsFetchingPokemonList,
});

export default listScreenSelector;
