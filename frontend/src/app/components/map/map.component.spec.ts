import { AsyncPipe } from '@angular/common';
import { of } from 'rxjs';
import { MapOptions, tileLayer, latLng } from 'leaflet';
import { MapHeightService } from './../../services/map-height.service';
import {
  Spectator,
  createComponentFactory,
  mockProvider,
  byTestId,
} from '@ngneat/spectator';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { MapComponent } from './map.component';
import { Store } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('MapComponent unit tests', () => {
  let spectator: Spectator<MapComponent>;
  let component: MapComponent;
  const mapHeight: number = 20;
  const options: MapOptions = {
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
  const createComponent = createComponentFactory({
    component: MapComponent,
    providers: [mockProvider(Store), mockProvider(MapHeightService)],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator
      .inject(MapHeightService)
      .getMapHeight.and.returnValue(`calc(100vh - ${mapHeight}px)`);
    component = spectator.component;
    component.options = options;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders map', () => {
    expect(spectator.query(byTestId('map'))).toBeTruthy();
  });

  it('calculates map height', fakeAsync(() => {
    component.calculateHeight().subscribe((height) => {
      expect(of(height)).toEqual(of(`calc(100vh - ${mapHeight}px)`));
    });
    expect(spectator.inject(MapHeightService).getMapHeight).toHaveBeenCalled();
  }));
});
