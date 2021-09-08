import {createStructuredSelector} from 'reselect';
import Pokemon from '../../models/Pokemon';
import {selectPokemon} from '../../redux/Pokemons/Pokemons.selectors';
import {RootState} from '../../store';

type DetailScreenData = {
  pokemon: Pokemon | null;
};

const detailScreenSelector = createStructuredSelector<
  RootState,
  DetailScreenData
>({
  pokemon: selectPokemon,
});

export default detailScreenSelector;
