import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanerRoutingModule } from './planer-routing.module';
import * as fromBikeStations from 'src/app/store/reducers/bike-stations.reducer';
import * as fromLocation from 'src/app/store/reducers/location.reducer';
import { BikeStationsEffects } from './../../store/effects/bike-stations.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PlanerRoutingModule,
    StoreModule.forFeature(
      fromBikeStations.bikeStationsFeatureKey,
      fromBikeStations.reducer
    ),
    EffectsModule.forFeature([BikeStationsEffects]),
    StoreModule.forFeature(
      fromLocation.locationFeatureKey,
      fromLocation.reducer
    ),
  ],
})
export class PlanerModule {}
