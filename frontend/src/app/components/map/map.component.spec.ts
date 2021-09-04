import { initialState } from '../../mocks/mocks';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { MapHeightService } from './../../services/map-height.service';
import {
  Spectator,
  createComponentFactory,
  mockProvider,
  byTestId,
} from '@ngneat/spectator';

import { MapComponent } from './map.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { mapOptionsMock } from 'src/app/mocks/mocks';

describe('MapComponent unit tests', () => {
  let spectator: Spectator<MapComponent>;
  let component: MapComponent;
  const mapHeight: number = 20;
  const createComponent = createComponentFactory({
    component: MapComponent,
    providers: [
      provideMockStore({ initialState }),
      mockProvider(MapHeightService),
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  });

  beforeEach(() => {
    spectator = createComponent();
    spectator
      .inject(MapHeightService)
      .getMapHeight.and.returnValue(of(`calc(100vh - ${mapHeight}px)`));
    component = spectator.component;
    component.options = mapOptionsMock;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders map', () => {
    expect(spectator.query(byTestId('map'))).toBeTruthy();
  });

  it('calculates map height', () => {
    spectator.detectComponentChanges();
    expect(spectator.inject(MapHeightService).getMapHeight).toHaveBeenCalled();
    expect(spectator.query(byTestId('map')).getAttribute('style')).toBe(
      `height: calc(-${mapHeight}px + 100vh);`
    );
  });
});
