import { map } from 'rxjs/operators';
import { IBikeStation } from '../../../interfaces/bikes.interfaces';
import { BikesService } from '../../../services/bikes.service';
import { Component, OnInit } from '@angular/core';
import getDistance from 'geolib/es/getDistance';
import { GeolibInputCoordinates } from 'geolib/es/types';
@Component({
  selector: 'app-bike-stations-list',
  templateUrl: './bike-stations-list.component.html',
  styleUrls: ['./bike-stations-list.component.scss'],
})
export class BikeStationsListComponent implements OnInit {
  bikeStations: IBikeStation[];
  private geolocationOptions: PositionOptions = {
    enableHighAccuracy: true,
    maximumAge: 10000,
  };
  constructor(private bikesService: BikesService) {
    navigator.geolocation.watchPosition(
      this.getBikesList.bind(this),
      this.handleLocationError,
      this.geolocationOptions
    );
  }

  ngOnInit(): void {}

  getBikesList(position): void {
    this.bikesService
      .getBikesStationList()
      .pipe(
        map((bikeStations) =>
          this.sortStationsByDistance(position, bikeStations)
        )
      )
      .subscribe((response) => (this.bikeStations = response));
  }

  private sortStationsByDistance(
    position: GeolocationPosition,
    bikeStations: IBikeStation[]
  ): IBikeStation[] {
    const from: GeolibInputCoordinates = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    };

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

  private handleLocationError() {}
}
