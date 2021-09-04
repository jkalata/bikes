import { MockProvider } from 'ng-mocks';
import { LocationService } from './../../services/location.service';
import { LocationEffects } from './location.effects';
import { selectBikeStations } from '../selectors/bike-stations.selector';
import { bikeStationsMock } from '../../mocks/mocks';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { initialState } from 'src/app/mocks/mocks';
import { TestBed } from '@angular/core/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import * as LocationAcions from '../actions/location.actions';

describe('LocationEffects', () => {
  const getUserLocation: Observable<Action> = of(
    LocationAcions.getUserLocation
  );

  let actions$: Observable<Action>;
  let effects: LocationEffects;
  let store: MockStore;
  let locationService: LocationService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LocationEffects,
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
        MockProvider(LocationService),
      ],
    });
    effects = TestBed.inject(LocationEffects);
    store = TestBed.inject(MockStore);
    locationService = TestBed.inject(LocationService);
  });

  it('calls getUserLocation', () => {
    actions$ = getUserLocation;
    const spy = spyOn(locationService, 'getUserLocation').and.callThrough();
    effects.getLocation$.subscribe(() => {
      expect(spy).toHaveBeenCalled();
    });
  });
});
