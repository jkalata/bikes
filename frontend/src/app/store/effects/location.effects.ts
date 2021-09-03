import { Store } from '@ngrx/store';
import { LocationService } from './../../services/location.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as LocationActions from '../actions/location.actions';
@Injectable()
export class LocationEffects {
  getLocation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LocationActions.getUserLocation),
        map(() => {
          return this.locationService.getUserLocation();
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private locationService: LocationService
  ) {}
}
