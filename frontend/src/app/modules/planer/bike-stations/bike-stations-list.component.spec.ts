import { initialState } from '../../../mocks/mocks';
import { BikeStationCardComponent } from 'src/app/components/bike-station-card/bike-station-card.component';
import { bikeStationsMock } from 'src/app/mocks/mocks';
import { of } from 'rxjs';
import { Spectator, createComponentFactory, byTestId } from '@ngneat/spectator';
import { BikeStationsListComponent } from './bike-stations-list.component';
import { MockComponent } from 'ng-mocks';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
describe('BikeStationsListComponent unit tests', () => {
  let spectator: Spectator<BikeStationsListComponent>;
  let component: BikeStationsListComponent;
  let store: MockStore;

  const createComponent = createComponentFactory({
    component: BikeStationsListComponent,
    providers: [provideMockStore({ initialState })],
    declarations: [MockComponent(BikeStationCardComponent)],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    store = spectator.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('creates station card component', () => {
    component.bikeStations = of(bikeStationsMock);
    spectator.detectComponentChanges();
    expect(spectator.query(BikeStationCardComponent)).toBeTruthy();
  });

  it('passes inputs to station card component', () => {
    component.bikeStations = of(bikeStationsMock);
    spectator.detectComponentChanges();
    expect(spectator.queryAll(BikeStationCardComponent)[0].bikeStation).toEqual(
      bikeStationsMock[0]
    );
  });

  it('shows loader when loading stations', () => {
    store.setState({
      bikeStations: {
        bikeStations: null,
      },
    });
    spectator.detectComponentChanges();

    expect(spectator.query(byTestId('loader'))).toBeTruthy();
  });

  it('shows stations list', () => {
    expect(spectator.query(byTestId('station-list'))).toBeTruthy();
  });
});
