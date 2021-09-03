import { createAction, props } from '@ngrx/store';

export const getUserLocation = createAction('Get User Location');

export const changeUserLocation = createAction(
  'Change User Location',
  props<{ userLocation: GeolocationPosition }>()
);

export const changeErrorFlag = createAction(
  'Change Error Flag',
  props<{ error: boolean }>()
);
