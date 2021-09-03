import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeStationCardComponent } from 'src/app/components/bike-station-card/bike-station-card.component';

@NgModule({
  declarations: [BikeStationCardComponent],
  imports: [CommonModule],
  exports: [BikeStationCardComponent],
})
export class PlanerSharedModule {}
