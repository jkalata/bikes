import { MapHeightService } from './map-height.service';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';

describe('MapHeightService', () => {
  let spectator: SpectatorService<MapHeightService>;
  let service: MapHeightService;
  const toolbarHeight = 30;
  const bikeStationCardHeight = 20;
  const createService = createServiceFactory({
    service: MapHeightService,
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
    service['getToolbarHeight'] = () => toolbarHeight;
    service.setBikeStationCardHeight(bikeStationCardHeight);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('sets bike station card height', () => {
    expect(service['bikeStationCardHeight']).toBe(20);
  });

  it('gets map height', () => {
    service.getMapHeight().subscribe((height) => {
      console.log(height);
      expect(height).toBe(
        `calc(100vh - ${toolbarHeight + bikeStationCardHeight}px)`
      );
    });
  });
});
