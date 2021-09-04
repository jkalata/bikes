import { GeolibInputCoordinates } from 'geolib/es/types';
import { IBikeStation } from './../../interfaces/bikes.interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as BikeStationsActions from '../actions/bike-stations.actions';
import getDistance from 'geolib/es/getDistance';

export interface BikeStationsState {
  bikeStations: IBikeStation[];
}

export const initialBikeStationsState: BikeStationsState = {
  bikeStations: null,
};

const bikeStationsReducer = createReducer(
  initialBikeStationsState,
  on(BikeStationsActions.changeBikeStations, (state, { bikeStations }) => ({
    ...state,
    bikeStations,
  })),
  on(
    BikeStationsActions.sortBikeStationsByDistance,
    (state, { userLocation }) => {
      const from: GeolibInputCoordinates = {
        latitude: userLocation.lat,
        longitude: userLocation.lon,
      };
      let sortedBikeStationsList: IBikeStation[];
      sortedBikeStationsList = sortBikeStationsByCoordinates(
        state.bikeStations,
        from
      );
      return {
        ...state,
        bikeStations: sortedBikeStationsList,
      };
    }
  )
);

export function sortBikeStationsByCoordinates(
  bikeStations: IBikeStation[],
  from: GeolibInputCoordinates
) {
  return bikeStations
    .map((station) => {
      const to: GeolibInputCoordinates = {
        latitude: station.geometry.coordinates[1],
        longitude: station.geometry.coordinates[0],
      };
      return {
        ...station,
        geometry: {
          ...station.geometry,
          distance: getDistance(from, to),
          //TODO reverse geocoding
          address: 'ulica Testowa',
        },
      };
    })
    .sort((a, b) => {
      if (a.geometry.distance > b.geometry.distance) {
        return 1;
      } else if (a.geometry.distance < b.geometry.distance) {
        return -1;
      } else {
        return 0;
      }
    });
}

export const reducer = (state: BikeStationsState | undefined, action: Action) =>
  bikeStationsReducer(state, action);

export const bikeStationsFeatureKey = 'bikeStations';
