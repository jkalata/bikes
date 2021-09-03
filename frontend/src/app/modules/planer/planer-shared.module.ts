import { LocationEffects } from './../../store/effects/location.effects';
import { BikeStationsEffects } from './../../store/effects/bike-stations.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeStationCardComponent } from 'src/app/components/bike-station-card/bike-station-card.component';
import * as fromBikeStations from 'src/app/store/reducers/bike-stations.reducer';
import * as fromLocation from 'src/app/store/reducers/location.reducer';

@NgModule({
  declarations: [BikeStationCardComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromBikeStations.bikeStationsFeatureKey,
      fromBikeStations.reducer
    ),
    EffectsModule.forFeature([BikeStationsEffects, LocationEffects]),
    StoreModule.forFeature(
      fromLocation.locationFeatureKey,
      fromLocation.reducer
    ),
  ],
  exports: [BikeStationCardComponent],
})
export class PlanerSharedModule {}
