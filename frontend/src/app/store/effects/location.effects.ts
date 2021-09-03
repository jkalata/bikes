import { selectErrorFlag } from './../selectors/location.selector';
import { Store, select } from '@ngrx/store';
import { LocationService } from './../../services/location.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, take } from 'rxjs/operators';
import * as LocationActions from '../actions/location.actions';
import { AppState } from '..';
import { EMPTY } from 'rxjs';
@Injectable()
export class LocationEffects {
  getLocation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LocationActions.getUserLocation),
        mergeMap(() => this.store.pipe(select(selectErrorFlag), take(1))),
        map((error) => {
          console.log(error);
          if (error === null || error === true) {
            return this.locationService.getUserLocation();
          } else return EMPTY;
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private locationService: LocationService,
    private store: Store<AppState>
  ) {}
}
