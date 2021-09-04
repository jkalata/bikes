import { IUserLocation } from '../interfaces/location.interfaces';
import { AppState } from 'src/app/store';
import { MapOptions, tileLayer, latLng } from 'leaflet';
import { IBikeStation } from '../interfaces/bikes.interfaces';
export const bikeStationsMock: IBikeStation[] = [
  {
    geometry: {
      coordinates: [10, 10],
      distance: 123,
      type: 'Type1',
      address: 'ulica Testowa',
    },
    id: 'Id1',
    properties: {
      bike_racks: '12',
      bikes: '12',
      free_racks: '12',
      label: 'Label1',
      updated: 'Updated1',
    },
    type: 'Type1',
  },
  {
    geometry: {
      coordinates: [1, 1],
      distance: 234,
      type: 'Type2',
      address: 'ulica Testowa',
    },
    id: 'Id2',
    properties: {
      bike_racks: '24',
      bikes: '24',
      free_racks: '24',
      label: 'Label2',
      updated: 'Updated2',
    },
    type: 'Type2',
  },
];

export const userLocationMock: IUserLocation = {
  accuracy: 1,
  lat: 0,
  lon: 0,
  timestamp: 1,
};

export const initialState: AppState = {
  bikeStations: {
    bikeStations: bikeStationsMock,
  },
  location: {
    userLocation: userLocationMock,
    error: false,
  },
};

export const mapOptionsMock: MapOptions = {
  layers: [
    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '...',
    }),
  ],
  zoom: 16,
  center: latLng(52.184261, 21.02123),
  attributionControl: false,
  zoomControl: false,
};
