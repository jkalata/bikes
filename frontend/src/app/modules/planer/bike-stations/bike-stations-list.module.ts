import { BikeStationsListRoutingModule } from './bike-stations-list-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BikeStationsListComponent } from './bike-stations-list.component';
import { SharedModule } from '../../shared/shared.module';
import { BikeStationCardComponent } from 'src/app/components/bike-station-card/bike-station-card.component';

@NgModule({
  declarations: [BikeStationsListComponent, BikeStationCardComponent],
  imports: [CommonModule, BikeStationsListRoutingModule, SharedModule],
})
export class BikeStationsListModule {}
