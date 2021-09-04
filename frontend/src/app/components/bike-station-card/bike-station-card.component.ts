import { MapHeightService } from './../../services/map-height.service';
import { IBikeStation } from '../../interfaces/bikes.interfaces';
import { Component, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-bike-station-card',
  templateUrl: './bike-station-card.component.html',
  styleUrls: ['./bike-station-card.component.scss'],
})
export class BikeStationCardComponent implements AfterViewInit {
  @Input() bikeStation: IBikeStation;
  usersLocation;
  constructor(private mapHeightService: MapHeightService) {}

  ngAfterViewInit(): void {
    this.changeHeight();
  }

  private changeHeight(): void {
    this.mapHeightService.setBikeStationCardHeight(
      document.getElementById('bike-container').offsetHeight
    );
  }
}
