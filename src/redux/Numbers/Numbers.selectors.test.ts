import {RootState} from '../../store';
import {selectCount} from './Numbers.selectors';
import {INITIAL_STATE} from './Numbers.reducer';
import {INITIAL_STATE as INITIAL_STATE_POKEMON} from '../Pokemons/Pokemons.reducer';
import Pokemon from '../../models/Pokemon';
describe('Number Selectors', () => {
  describe('selectCount', () => {
    it('should retrieve the count from the application state', () => {
      const state: RootState = {
        pokemon: {...INITIAL_STATE_POKEMON},
        number: {
          ...INITIAL_STATE,
          count: 10,
        },
      };
      expect(selectCount(state)).toEqual(10);
    });
  });
});
