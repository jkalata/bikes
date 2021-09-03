import { take } from 'rxjs/operators';
import { selectBikeStationById } from './../../../store/selectors/bike-stations.selector';
import { Store, select } from '@ngrx/store';
import { IBikeStation } from './../../../interfaces/bikes.interfaces';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from 'src/app/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bike-station-details',
  templateUrl: './bike-station-details.component.html',
  styleUrls: ['./bike-station-details.component.scss'],
})
export class BikeStationDetailsComponent {
  private stationId: string;

  bikeStation: Observable<IBikeStation>;
  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.getStationId();
    this.bikeStation = this.store.pipe(
      select(selectBikeStationById({ stationId: this.stationId }))
    );
  }

  private getStationId() {
    this.activatedRoute.params.pipe(take(1)).subscribe((params) => {
      this.stationId = params.id;
    });
  }
}
