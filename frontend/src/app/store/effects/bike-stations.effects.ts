import { selectBikeStations } from './../selectors/bike-stations.selector';
import { Store, select } from '@ngrx/store';
import { BikesService } from './../../services/bikes.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, take } from 'rxjs/operators';
import * as BikeStationsActions from '../actions/bike-stations.actions';
import * as LocationActions from '../actions/location.actions';
import { AppState } from '..';
import { of } from 'rxjs';

@Injectable()
export class BikeStationsEffects {
  getBikeStations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BikeStationsActions.getBikeStations),
      mergeMap(() => this.store.pipe(select(selectBikeStations), take(1))),
      mergeMap((storedBikeStations) => {
        if (storedBikeStations === null) {
          return this.bikesService.getBikesStationList();
        } else {
          return of(storedBikeStations);
        }
      }),
      mergeMap((bikeStations) => [
        BikeStationsActions.changeBikeStations({ bikeStations }),
      ])
    )
  );

  sortBikeStationsByDistance$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LocationActions.changeUserLocation),
      mergeMap((actionResponse) => [
        BikeStationsActions.sortBikeStationsByDistance({
          userLocation: actionResponse.userLocation,
        }),
      ])
    )
  );

  refreshBikeStations$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BikeStationsActions.refreshBikeStations),
      mergeMap(() => this.bikesService.getBikesStationList()),
      mergeMap((bikeStations) => [
        BikeStationsActions.changeBikeStations({ bikeStations }),
      ])
    )
  );

  constructor(
    private actions$: Actions,
    private bikesService: BikesService,
    private store: Store<AppState>
  ) {}
}
