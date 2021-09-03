import { PlanerSharedModule } from './../planer-shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikeStationDetailsRoutingModule } from './bike-station-details-routing.module';
import { BikeStationDetailsComponent } from './bike-station-details.component';

@NgModule({
  declarations: [BikeStationDetailsComponent],
  imports: [CommonModule, BikeStationDetailsRoutingModule, PlanerSharedModule],
})
export class BikeStationDetailsModule {}
