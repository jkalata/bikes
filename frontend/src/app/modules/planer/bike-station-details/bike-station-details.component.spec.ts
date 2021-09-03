import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  createComponentFactory,
  mockProvider,
  Spectator,
} from '@ngneat/spectator';

import { BikeStationDetailsComponent } from './bike-station-details.component';

describe('BikeStationDetailsComponent', () => {
  let spectator: Spectator<BikeStationDetailsComponent>;
  let component: BikeStationDetailsComponent;
  const snapshotMock = jasmine.createSpy('snapshot');
  const createComponent = createComponentFactory({
    component: BikeStationDetailsComponent,
    providers: [
      mockProvider(Store),
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
    // spectator.inject(ActivatedRoute).params = of({ id: 1 });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
