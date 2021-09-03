import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stations',
    pathMatch: 'full',
  },
  {
    path: 'stations',
    loadChildren: () =>
      import('./bike-stations/bike-stations-list.module').then(
        (m) => m.BikeStationsListModule
      ),
  },
  {
    path: 'stations/:id',
    loadChildren: () =>
      import('./bike-station-details/bike-station-details.module').then(
        (m) => m.BikeStationDetailsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanerRoutingModule {}
