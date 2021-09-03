import { selectBikeStations } from './../../../store/selectors/bike-stations.selector';
import { IBikeStation } from '../../../interfaces/bikes.interfaces';
import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { getBikeStations } from 'src/app/store/actions/bike-stations.actions';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-bike-stations-list',
  templateUrl: './bike-stations-list.component.html',
  styleUrls: ['./bike-stations-list.component.scss'],
})
export class BikeStationsListComponent {
  bikeStations: Observable<IBikeStation[]>;

  constructor(private store: Store<AppState>) {
    this.store.dispatch(getBikeStations());
    this.bikeStations = this.store.pipe(select(selectBikeStations));
  }
}
