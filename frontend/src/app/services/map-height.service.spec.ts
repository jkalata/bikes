import { TestBed } from '@angular/core/testing';

import { MapHeightService } from './map-height.service';

describe('MapHeightService', () => {
  let service: MapHeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapHeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
