import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { BikeStationsState } from '../reducers/bike-stations.reducer';

export const selectBikeStationsState = (state: AppState) => state.bikeStations;

export const selectBikeStations = createSelector(
  selectBikeStationsState,
  (bikeStationsState: BikeStationsState) => bikeStationsState.bikeStations
);

export const selectBikeStationById = (props: { stationId: string }) =>
  createSelector(selectBikeStations, (bikeStations) =>
    bikeStations.find((station) => station.id === props.stationId)
  );
