import { PlanerSharedModule } from './../planer-shared.module';
import { BikeStationsListRoutingModule } from './bike-stations-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikeStationsListComponent } from './bike-stations-list.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BikeStationsListComponent],
  imports: [
    CommonModule,
    BikeStationsListRoutingModule,
    SharedModule,
    PlanerSharedModule,
  ],
})
export class BikeStationsListModule {}
