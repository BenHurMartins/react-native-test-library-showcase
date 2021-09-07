import {createStructuredSelector} from 'reselect';
import Pokemon from '../../models/Pokemon';
import {
  selectCount,
  selectPokemon,
} from '../../redux/Numbers/Numbers.selectors';
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
