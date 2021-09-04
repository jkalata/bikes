import { IBikeStation } from './../../interfaces/bikes.interfaces';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { BikeStationsState } from '../reducers/bike-stations.reducer';

export const selectBikeStationsState = (state: AppState) => state.bikeStations;

export const selectBikeStations = createSelector(
  selectBikeStationsState,
  (bikeStationsState: BikeStationsState) => bikeStationsState.bikeStations
);

export const selectBikeStationById = (props: { stationId: string }) =>
  createSelector(selectBikeStations, (bikeStations: IBikeStation[]) =>
    bikeStations.find((station: IBikeStation) => station.id === props.stationId)
  );
