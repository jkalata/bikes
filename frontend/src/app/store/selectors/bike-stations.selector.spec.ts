import {
  selectBikeStations,
  selectBikeStationById,
} from './bike-stations.selector';
import { initialState, bikeStationsMock } from 'src/app/mocks/mocks';

describe('BikeStationsSelector', () => {
  it('selects bikeStation list', () => {
    const result = selectBikeStations.projector(initialState.bikeStations);
    expect(result.length).toBe(2);
    expect(result[0].id).toBe('Id1');
  });

  it('selects bikeStation by ID', () => {
    const result = selectBikeStationById({ stationId: 'Id1' }).projector(
      initialState.bikeStations.bikeStations
    );
    expect(result).toEqual(bikeStationsMock[0]);
  });
});
