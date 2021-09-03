import convertDistance from 'geolib/es/convertDistance';
import { IBikeStation } from '../../interfaces/bikes.interfaces';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bike-station-card',
  templateUrl: './bike-station-card.component.html',
  styleUrls: ['./bike-station-card.component.scss'],
})
export class BikeStationCardComponent {
  @Input() bikeStation: IBikeStation;
  bikeStationLocation: string = 'ulica Testowa';
  usersLocation;
  constructor() {}

  formatDistance(distanceInMetres: number): string {
    if (distanceInMetres === undefined) {
      return 'N/A';
    }
    if (distanceInMetres > 1000) {
      return `${convertDistance(distanceInMetres, 'km').toFixed(2)} km`;
    } else {
      return `${distanceInMetres} m`;
    }
  }
}
