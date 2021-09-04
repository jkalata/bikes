import { IUserLocation } from './../../interfaces/location.interfaces';
import { IBikeStation } from './../../interfaces/bikes.interfaces';
import { take } from 'rxjs/operators';
import { selectUserLocation } from './../../store/selectors/location.selector';
import { Store, select } from '@ngrx/store';
import { MapHeightService } from './../../services/map-height.service';
import { Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';
import {
  circle,
  circleMarker,
  icon,
  LatLng,
  latLng,
  Map,
  MapOptions,
  marker,
  tileLayer,
} from 'leaflet';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnChanges {
  @Input() bikeStation: IBikeStation;

  options: MapOptions = {
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

  private bikeIcon = icon({
    iconUrl: '/assets/icons/Bike.svg',
    iconSize: [16, 16],
  });
  private userLocation: LatLng;
  private bikeStationLocation: LatLng;
  private map: Map;
  private fillColor: '#4163fb';

  constructor(
    private mapHeightService: MapHeightService,
    private store: Store<AppState>
  ) {}

  calculateHeight(): Observable<string> {
    return this.mapHeightService.getMapHeight();
  }

  ngOnChanges(): void {
    this.getBikeStationLocation();
  }

  onMapReady(map: Map): void {
    this.map = map;
    this.getMapCenter();
    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);
    this.getBikeStationMarker();
  }

  getMapCenter(): void {
    this.store
      .pipe(select(selectUserLocation), take(1))
      .subscribe((location: IUserLocation) => {
        this.userLocation = latLng(location.lat, location.lon);
        this.map.panTo(this.bikeStationLocation);
        this.getUserLocationMarker(location.accuracy);
      });
  }

  private getUserLocationMarker(radius: number): void {
    this.map.addLayer(
      circle(this.userLocation, {
        radius,
        stroke: false,
        fillColor: this.fillColor,
      })
    );
    this.map.addLayer(
      circleMarker(this.userLocation, {
        fillOpacity: 1,
        fillColor: this.fillColor,
        stroke: false,
      })
    );
  }

  private getBikeStationLocation(): void {
    this.bikeStationLocation = latLng(
      this.bikeStation.geometry.coordinates[1],
      this.bikeStation.geometry.coordinates[0]
    );
  }

  private getBikeStationMarker(): void {
    this.map.addLayer(
      circleMarker(this.bikeStationLocation, {
        fillColor: '#ffffff',
        fillOpacity: 1,
        color: '#ffffff',
        radius: 12,
        className: 'bike-station-marker',
      }).bindTooltip(this.bikeStation.properties.bikes, {
        permanent: true,
        className: 'bike-station-label',
        direction: 'center',
        offset: [25, 0],
        opacity: 1,
      })
    );

    this.map.addLayer(
      marker(this.bikeStationLocation, {
        icon: this.bikeIcon,
        opacity: 1,
      })
    );
  }
}
