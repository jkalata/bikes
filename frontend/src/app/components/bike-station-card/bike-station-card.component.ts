import { MapHeightService } from './../../services/map-height.service';
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
  constructor(private mapHeightService: MapHeightService) {}

  changeHeight() {
    this.mapHeightService.setBikeStationCardHeight(
      document.getElementById('bike-container').offsetHeight
    );
  }
}
