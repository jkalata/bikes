import { Store } from '@ngrx/store';
import {
  Spectator,
  createComponentFactory,
  mockProvider,
} from '@ngneat/spectator';
import { BikeStationsListComponent } from './bike-stations-list.component';

describe('BikeStationsListComponent', () => {
  let spectator: Spectator<BikeStationsListComponent>;
  let component: BikeStationsListComponent;
  const createComponent = createComponentFactory({
    component: BikeStationsListComponent,
    providers: [mockProvider(Store)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
