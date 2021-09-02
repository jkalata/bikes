import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikesListRoutingModule } from './bikes-list-routing.module';
import { BikesListComponent } from './bikes-list.component';
import { SharedModule } from '../../shared/shared.module';
import { BikeStationCardComponent } from 'src/app/components/bike-station-card/bike-station-card.component';

@NgModule({
  declarations: [BikesListComponent, BikeStationCardComponent],
  imports: [CommonModule, BikesListRoutingModule, SharedModule],
})
export class BikesListModule {}
