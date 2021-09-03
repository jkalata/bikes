import { IUserLocation } from './../../interfaces/location.interfaces';
import { createAction, props } from '@ngrx/store';

export const getUserLocation = createAction('Get User Location');

export const changeUserLocation = createAction(
  'Change User Location',
  props<{ userLocation: IUserLocation }>()
);

export const changeErrorFlag = createAction(
  'Change Error Flag',
  props<{ error: boolean }>()
);
