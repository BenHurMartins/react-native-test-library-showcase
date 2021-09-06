import {RootState} from '../../store';
import {selectCount, selectPokemon} from './Numbers.selectors';
import {INITIAL_STATE} from './Numbers.reducer';
import Pokemon from '../../models/Pokemon';
describe('Number Selectors', () => {
  describe('selectCount', () => {
    it('should retrieve the count from the application state', () => {
      const state: RootState = {
        number: {
          ...INITIAL_STATE,
          count: 10,
        },
      };
      expect(selectCount(state)).toEqual(10);
    });
  });
  describe('selectPokemon', () => {
    it('should retrieve the pokemon from the application state', () => {
      const pokemon: Pokemon = {
        name: 'Jeff',
        avatar: 'image.com',
      };
      const state: RootState = {
        number: {
          ...INITIAL_STATE,
          pokemon,
        },
      };
      expect(selectPokemon(state)).toEqual(pokemon);
    });
  });
});
