import { initialState } from '../../../mocks/mocks';
import { provideMockStore } from '@ngrx/store/testing';
import { bikeStationsMock } from 'src/app/mocks/mocks';
import { BikeStationCardComponent } from 'src/app/components/bike-station-card/bike-station-card.component';
import { MapComponent } from './../../../components/map/map.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { BikeStationDetailsComponent } from './bike-station-details.component';
import { MockComponents } from 'ng-mocks';

describe('BikeStationDetailsComponent', () => {
  let spectator: Spectator<BikeStationDetailsComponent>;
  let component: BikeStationDetailsComponent;

  const createComponent = createComponentFactory({
    component: BikeStationDetailsComponent,
    declarations: MockComponents(MapComponent, BikeStationCardComponent),
    providers: [
      provideMockStore({ initialState }),
      {
        provide: ActivatedRoute,
        useValue: {
          params: of([{ id: 1 }]),
        },
      },
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    component.bikeStation = of(bikeStationsMock[0]);
    spectator.detectComponentChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders child components', () => {
    expect(spectator.query(MapComponent)).toBeTruthy();
    expect(spectator.query(BikeStationCardComponent)).toBeTruthy();
  });

  it('passes inputs to child components', () => {
    expect(spectator.query(MapComponent).bikeStation).toEqual(
      bikeStationsMock[0]
    );
    expect(spectator.query(BikeStationCardComponent).bikeStation).toEqual(
      bikeStationsMock[0]
    );
  });
});
