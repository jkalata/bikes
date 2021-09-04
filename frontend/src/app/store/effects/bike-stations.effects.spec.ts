import { MockBikesService } from './../../mocks/mock-bikes.service';
import { selectBikeStations } from '../selectors/bike-stations.selector';
import { bikeStationsMock } from '../../mocks/mocks';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/mocks/mocks';
import { BikeStationsEffects } from './bike-stations.effects';
import { BikesService } from '../../services/bikes.service';
import { TestBed } from '@angular/core/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import * as BikeStationsAcions from '../actions/bike-stations.actions';
import * as LocationAcions from '../actions/location.actions';

describe('BikeStationsEffects', () => {
  const getBikeStationsAction: Observable<Action> = of(
    BikeStationsAcions.getBikeStations
  );

  const changeUserLocation: Observable<Action> = of(
    LocationAcions.changeUserLocation
  );

  let actions$: Observable<Action>;
  let effects: BikeStationsEffects;
  let store: MockStore;
  let bikesService: BikesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BikeStationsEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState,
          selectors: [
            {
              selector: selectBikeStations,
              value: bikeStationsMock,
            },
          ],
        }),
        { provide: BikesService, useClass: MockBikesService },
      ],
    });
    effects = TestBed.inject(BikeStationsEffects);
    store = TestBed.inject(MockStore);
    bikesService = TestBed.inject(BikesService);
  });

  it('calls getBikesStationList when store is empty', () => {
    actions$ = getBikeStationsAction;
    const spy = spyOn(bikesService, 'getBikesStationList').and.callThrough();
    store.overrideSelector(selectBikeStations, null);
    effects.getBikeStations$.subscribe((res) => {
      expect(res).toEqual(
        BikeStationsAcions.changeBikeStations({
          bikeStations: bikeStationsMock,
        })
      );
      expect(spy).toHaveBeenCalled();
    });
  });

  it('does not call getBikesStationList when there is data in store', () => {
    actions$ = getBikeStationsAction;
    const spy = spyOn(bikesService, 'getBikesStationList').and.callThrough();
    effects.getBikeStations$.subscribe((res) => {
      expect(res).toEqual(
        BikeStationsAcions.changeBikeStations({
          bikeStations: bikeStationsMock,
        })
      );
      expect(spy).not.toHaveBeenCalled();
    });
  });

  it('(success case) fires sortBikeStations action upon user location', () => {
    actions$ = changeUserLocation;
    effects.sortBikeStationsByDistance$.subscribe((res) => {
      expect(res).toEqual(
        BikeStationsAcions.sortBikeStationsByDistance({
          userLocation: res.userLocation,
        })
      );
    });
  });

  it('(failure case) does not fire sortBikeStations action when there is no bikeStation data', () => {
    store.overrideSelector(selectBikeStations, null);
    actions$ = changeUserLocation;
    effects.sortBikeStationsByDistance$.subscribe((res) => {
      expect(res).toBeNull();
    });
  });
});
