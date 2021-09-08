import {createStructuredSelector} from 'reselect';
import Pokemon from '../../models/Pokemon';
import {selectPokemonList} from '../../redux/Pokemons/Pokemons.selectors';
import {RootState} from '../../store';

type ListScreenData = {
  pokemonList: Pokemon[] | null;
};

const listScreenSelector = createStructuredSelector<RootState, ListScreenData>({
  pokemonList: selectPokemonList,
});

export default listScreenSelector;
