import { LocationEffects } from './store/effects/location.effects';
import { BikeStationsEffects } from './store/effects/bike-stations.effects';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SharedModule } from './modules/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer,
  StoreModule,
} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppState } from './store';
import { localStorageSync } from 'ngrx-store-localstorage';
import * as fromBikeStations from 'src/app/store/reducers/bike-stations.reducer';
import * as fromLocation from 'src/app/store/reducers/location.reducer';
const reducers: ActionReducerMap<AppState> = {
  bikeStations: fromBikeStations.reducer,
  location: fromLocation.reducer,
};

export function localStorageSyncReducer(
  reducer: ActionReducer<any>
): ActionReducer<any> {
  return localStorageSync({
    keys: ['bikeStations', 'location'],
    rehydrate: true,
    storage: sessionStorage,
  })(reducer);
}
const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
@NgModule({
  declarations: [AppComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
      autoPause: true,
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([BikeStationsEffects, LocationEffects]),
    LeafletModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
