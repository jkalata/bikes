import { userLocationMock } from './../../mocks/mocks';
import { bikeStationsMock } from 'src/app/mocks/mocks';
import * as fromReducer from './bike-stations.reducer';
import {
  changeBikeStations,
  sortBikeStationsByDistance,
} from '../actions/bike-stations.actions';

describe('BikeStationsReducer', () => {
  describe('unknown action', () => {
    it('returns the default state', () => {
      const { initialBikeStationsState } = fromReducer;
      const action = {
        type: 'Unknown',
      };
      const state = fromReducer.reducer(initialBikeStationsState, action);

      expect(state).toBe(initialBikeStationsState);
    });
  });

  describe('bikeStationsActions', () => {
    it('changes bikeStations state', () => {
      const { initialBikeStationsState } = fromReducer;
      const newState: fromReducer.BikeStationsState = {
        bikeStations: bikeStationsMock,
      };
      const action = changeBikeStations({
        bikeStations: newState.bikeStations,
      });
      const state = fromReducer.reducer(initialBikeStationsState, action);

      expect(state).toEqual(newState);
    });

    it('sorts bikeStations by distance from the user', () => {
      const newState: fromReducer.BikeStationsState = {
        bikeStations: fromReducer.sortBikeStationsByCoordinates(
          bikeStationsMock,
          userLocationMock
        ),
      };
      const action = sortBikeStationsByDistance({
        userLocation: userLocationMock,
      });
      const state = fromReducer.reducer(
        { bikeStations: bikeStationsMock },
        action
      );
      expect(state).toEqual(newState);
    });
  });
});
