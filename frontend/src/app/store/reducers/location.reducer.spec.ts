import { userLocationMock } from './../../mocks/mocks';
import * as fromReducer from './location.reducer';
import {
  changeErrorFlag,
  changeUserLocation,
} from '../actions/location.actions';

describe('BikeStationsReducer', () => {
  describe('unknown action', () => {
    it('returns the default state', () => {
      const { initialLocationState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialLocationState, action);

      expect(state).toBe(initialLocationState);
    });
  });

  describe('locationAtions', () => {
    it('changes user location', () => {
      const { initialLocationState } = fromReducer;
      const newState: fromReducer.LocationState = {
        userLocation: userLocationMock,
        error: null,
      };
      const action = changeUserLocation({
        userLocation: newState.userLocation,
      });
      const state = fromReducer.reducer(initialLocationState, action);

      expect(state).toEqual(newState);
    });

    it('changes error flag', () => {
      const expectedError = true;
      const { initialLocationState } = fromReducer;
      const newState: fromReducer.LocationState = {
        userLocation: null,
        error: expectedError,
      };
      const action = changeErrorFlag({
        error: expectedError,
      });
      const state = fromReducer.reducer(initialLocationState, action);

      expect(state).toEqual(newState);
    });
  });
});
