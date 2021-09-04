import { userLocationMock } from '../../mocks/mocks';
import { selectErrorFlag, selectUserLocation } from './location.selector';
import { initialState } from 'src/app/mocks/mocks';

describe('LocationSelector', () => {
  it('selects error flag', () => {
    const result = selectErrorFlag.projector(initialState.location);
    expect(result).toBe(false);
  });

  it('selects user location', () => {
    const result = selectUserLocation.projector(initialState.location);
    expect(result).toEqual(userLocationMock);
  });
});
