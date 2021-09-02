import { BikesListComponent } from './bikes-list/bikes-list.component';
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
      import('../planer/bikes-list/bikes-list.module').then(
        (m) => m.BikesListModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanerRoutingModule {}
