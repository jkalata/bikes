import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  createHttpFactory,
  SpectatorHttp,
  SpectatorService,
} from '@ngneat/spectator';

import { BikesService } from './bikes.service';

describe('BikesService', () => {
  let spectator: SpectatorHttp<BikesService>;
  let service: BikesService;
  const createComponent = createHttpFactory({
    service: BikesService,
    providers: [HttpClientTestingModule],
  });

  beforeEach(() => {
    spectator = createComponent();
    service = spectator.service;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
