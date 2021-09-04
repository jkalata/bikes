import { BikeStationDetailsComponent } from './../../modules/planer/bike-station-details/bike-station-details.component';
import { BikeStationsListComponent } from './../../modules/planer/bike-stations/bike-stations-list.component';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator';

import { ToolbarComponent } from './toolbar.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
describe('ToolbarComponent unit tests', () => {
  let spectator: SpectatorRouting<ToolbarComponent>;
  let component: ToolbarComponent;

  const createComponent = createRoutingFactory({
    component: ToolbarComponent,
    declarations: [BikeStationsListComponent, BikeStationDetailsComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    routes: [
      {
        path: 'planer/stations',
        component: BikeStationsListComponent,
      },
      {
        path: 'planer/stations/:id',
        component: BikeStationDetailsComponent,
      },
    ],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
