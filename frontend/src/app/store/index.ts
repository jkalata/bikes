import { LocationState } from './reducers/location.reducer';
import { BikeStationsState } from './reducers/bike-stations.reducer';
export interface AppState {
  bikeStations: BikeStationsState;
  location: LocationState;
}
