import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikeStationDetailsComponent } from './bike-station-details.component';

const routes: Routes = [
  {
    path: '',
    component: BikeStationDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeStationDetailsRoutingModule {}
