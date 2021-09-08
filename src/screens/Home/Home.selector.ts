import {createStructuredSelector} from 'reselect';
import Pokemon from '../../models/Pokemon';
import {selectCount} from '../../redux/Numbers/Numbers.selectors';
import {selectPokemon} from '../../redux/Pokemons/Pokemons.selectors';
import {RootState} from '../../store';

type HomeScreenData = {
  count: number;
  pokemon: Pokemon | null;
};

const homeScreenSelector = createStructuredSelector<RootState, HomeScreenData>({
  count: selectCount,
  pokemon: selectPokemon,
});

export default homeScreenSelector;
