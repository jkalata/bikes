import { MapHeightService } from './../../services/map-height.service';
import { DistancePipe } from './../../pipes/distance.pipe';
import { BikeStationCardComponent } from './bike-station-card.component';
import {
  Spectator,
  createComponentFactory,
  byTestId,
  mockProvider,
} from '@ngneat/spectator';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { bikeStationsMock } from 'src/app/mocks/mocks';

describe('BikeStationCardComponent unit tests', () => {
  let spectator: Spectator<BikeStationCardComponent>;
  let component: BikeStationCardComponent;
  const createComponent = createComponentFactory({
    component: BikeStationCardComponent,
    providers: [DistancePipe, mockProvider(MapHeightService)],
    declarations: [DistancePipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  });

  beforeEach(() => {
    spectator = createComponent({
      props: {
        bikeStation: bikeStationsMock[0],
      },
    });
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('displays info about bike station', () => {
    const bikeIconSrc = 'assets/icons/Bike.svg';
    const rackIconSrc = 'assets/icons/Lock.svg';
    console.log(spectator.query(byTestId('bike-icon')).getAttribute('src'));
    expect(spectator.query(byTestId('bike-title'))).toHaveText('Label');
    expect(spectator.query(byTestId('distance'))).toHaveText('123 m');
    expect(spectator.query(byTestId('location'))).toHaveText('ulica Testowa');
    expect(spectator.query(byTestId('bike-icon')).getAttribute('src')).toBe(
      bikeIconSrc
    );
    expect(spectator.query(byTestId('num-of-bikes'))).toHaveText('12');
    expect(spectator.query(byTestId('rack-icon')).getAttribute('src')).toBe(
      rackIconSrc
    );
    expect(spectator.query(byTestId('num-of-racks'))).toHaveText('12');
  });

  it('sets card height in mapHeightService', () => {
    component.ngAfterViewInit();
    const height = document.getElementById('bike-container').offsetHeight;

    expect(
      spectator.inject(MapHeightService).setBikeStationCardHeight
    ).toHaveBeenCalledWith(height);
  });
});
