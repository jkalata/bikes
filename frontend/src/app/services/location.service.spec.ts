import { Store } from '@ngrx/store';
import {
  createServiceFactory,
  SpectatorService,
  mockProvider,
} from '@ngneat/spectator';

import { LocationService } from './location.service';

describe('LocationService', () => {
  let spectator: SpectatorService<LocationService>;
  let service: LocationService;
  const createComponent = createServiceFactory({
    service: LocationService,
    providers: [mockProvider(Store)],
  });

  beforeEach(() => {
    spectator = createComponent();
    service = spectator.service;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calls navigator.geolocation', () => {
    const spy = spyOn(navigator.geolocation, 'watchPosition');
    service.getUserLocation();
    expect(spy).toHaveBeenCalled();
  });
});
