import { LocationState } from './../reducers/location.reducer';
import { createSelector } from '@ngrx/store';
import { AppState } from '..';
export const selectLocationState = (state: AppState) => state.location;

export const selectErrorFlag = createSelector(
  selectLocationState,
  (locationState: LocationState) => locationState.error
);
