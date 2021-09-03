import { DistancePipe } from './../../pipes/distance.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeStationCardComponent } from 'src/app/components/bike-station-card/bike-station-card.component';

@NgModule({
  declarations: [BikeStationCardComponent, DistancePipe],
  imports: [CommonModule],
  exports: [BikeStationCardComponent],
  providers: [DistancePipe],
})
export class PlanerSharedModule {}
