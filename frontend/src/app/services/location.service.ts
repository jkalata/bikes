import {
  changeUserLocation,
  changeErrorFlag,
} from './../store/actions/location.actions';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { AppState } from '../store';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private geolocationOptions: PositionOptions = {
    enableHighAccuracy: true,
    maximumAge: 10000,
  };

  constructor(private store: Store<AppState>) {}

  getUserLocation() {
    navigator.geolocation.watchPosition(
      this.success.bind(this),
      this.error.bind(this),
      this.geolocationOptions
    );
  }

  private success(userLocation: GeolocationPosition) {
    this.store.dispatch(changeUserLocation({ userLocation }));
    this.store.dispatch(changeErrorFlag({ error: false }));
  }

  private error() {
    this.store.dispatch(changeErrorFlag({ error: true }));
  }
}
