import { IUserLocation } from './../interfaces/location.interfaces';
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
    maximumAge: 1000,
  };

  constructor(private store: Store<AppState>) {}

  getUserLocation(): void {
    navigator.geolocation.watchPosition(
      this.success.bind(this),
      this.error.bind(this),
      this.geolocationOptions
    );
  }

  private success(userLocation: GeolocationPosition): void {
    this.store.dispatch(
      changeUserLocation({ userLocation: this.mapUserLocation(userLocation) })
    );
    this.store.dispatch(changeErrorFlag({ error: false }));
  }

  private error(): void {
    this.store.dispatch(changeErrorFlag({ error: true }));
  }

  private mapUserLocation(userLocation: GeolocationPosition): IUserLocation {
    return {
      lat: userLocation.coords.latitude,
      lon: userLocation.coords.longitude,
      accuracy: userLocation.coords.accuracy,
      timestamp: userLocation.timestamp,
    };
  }
}
