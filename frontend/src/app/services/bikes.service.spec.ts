import { environment } from './../../environments/environment';
import {
  createHttpFactory,
  HttpMethod,
  SpectatorHttp,
} from '@ngneat/spectator';

import { BikesService } from './bikes.service';
import { bikeStationsMock } from '../mocks/mocks';

describe('BikesService', () => {
  let spectator: SpectatorHttp<BikesService>;
  let service: BikesService;
  const expectedUrl = environment.apiURL;
  const createComponent = createHttpFactory({
    service: BikesService,
  });

  beforeEach(() => {
    spectator = createComponent();
    service = spectator.service;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('gets bike stations data', () => {
    service.getBikesStationList().subscribe();
    spectator.expectOne(expectedUrl, HttpMethod.GET).flush(bikeStationsMock);
  });

  it('handles error', () => {
    const status = 500;
    const statusText = 'Internal Server Error';
    const errorEvent = new ErrorEvent('API Error');

    service.getBikesStationList().subscribe(
      () => {
        fail('next handler must not be called');
      },
      () => {},
      () => {
        fail('complete handler must not be called');
      }
    );
    spectator
      .expectOne(expectedUrl, HttpMethod.GET)
      .error(errorEvent, { status, statusText });
  });
});
