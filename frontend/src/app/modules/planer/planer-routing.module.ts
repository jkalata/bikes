import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bikes',
    pathMatch: 'full',
  },
  {
    path: 'bikes',
    loadChildren: () =>
      import('./bike-stations/bike-stations-list.module').then(
        (m) => m.BikeStationsListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanerRoutingModule {}
