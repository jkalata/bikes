import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BikeStationsListComponent } from './bike-stations-list.component';

const routes: Routes = [
  {
    path: '',
    component: BikeStationsListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikeStationsListRoutingModule {}
