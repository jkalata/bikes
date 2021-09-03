import { IUserLocation } from './../../interfaces/location.interfaces';
import { Action, createReducer, on } from '@ngrx/store';
import * as LocationActions from '../actions/location.actions';

export interface LocationState {
  userLocation: IUserLocation;
  error: boolean;
}

export const initialLocationState: LocationState = {
  userLocation: null,
  error: null,
};

const locationReducer = createReducer(
  initialLocationState,
  on(LocationActions.changeUserLocation, (state, { userLocation }) => ({
    ...state,
    userLocation,
  })),
  on(LocationActions.changeErrorFlag, (state, { error }) => ({
    ...state,
    error,
  }))
);

export const reducer = (state: LocationState | undefined, action: Action) =>
  locationReducer(state, action);

export const locationFeatureKey = 'location';
