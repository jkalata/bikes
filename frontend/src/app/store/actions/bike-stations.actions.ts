import { IUserLocation } from './../../interfaces/location.interfaces';
import { IBikeStation } from './../../interfaces/bikes.interfaces';
import { createAction, props } from '@ngrx/store';

export const getBikeStations = createAction('Get Bike Stations');

export const changeBikeStations = createAction(
  'Change Bike Stations',
  props<{ bikeStations: IBikeStation[] }>()
);

export const sortBikeStationsByDistance = createAction(
  'Sort Bike Stations By Distance',
  props<{ userLocation: IUserLocation }>()
);

export const refreshBikeStations = createAction('Refresh Bike Stations');
