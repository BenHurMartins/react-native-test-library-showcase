import Pokemon from '../../models/Pokemon';
import reducer, {
  decrementCounter,
  incrementCounter,
  INITIAL_STATE,
  NumberState,
} from './Numbers.reducer';

describe('Number Reducer', () => {
  describe('incrementCounter', () => {
    it('should increment the count in the state by 1', () => {
      const expectedResult: NumberState = {
        ...INITIAL_STATE,
        count: 1,
      };

      expect(reducer(INITIAL_STATE, incrementCounter)).toEqual(expectedResult);
    });
  });
  describe('decrementCounter', () => {
    it('should decrement the count in the state by 1', () => {
      const expectedResult: NumberState = {
        ...INITIAL_STATE,
        count: -1,
      };

      expect(reducer(INITIAL_STATE, decrementCounter)).toEqual(expectedResult);
    });
  });
});
