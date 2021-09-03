import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './../../../components/map/map.component';
import { PlanerSharedModule } from './../planer-shared.module';
import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';

import { BikeStationDetailsRoutingModule } from './bike-station-details-routing.module';
import { BikeStationDetailsComponent } from './bike-station-details.component';

@NgModule({
  declarations: [BikeStationDetailsComponent, MapComponent],
  imports: [
    CommonModule,
    BikeStationDetailsRoutingModule,
    PlanerSharedModule,
    LeafletModule,
  ],
  providers: [AsyncPipe],
})
export class BikeStationDetailsModule {}
