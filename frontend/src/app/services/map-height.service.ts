import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapHeightService {
  private mapHeight: BehaviorSubject<number> = new BehaviorSubject(0);
  private bikeStationCardHeight: number;
  constructor() {}

  setMapHeight(height: number): void {
    this.mapHeight.next(height);
  }

  getMapHeight(): Observable<string> {
    console.log(document.getElementById('toolbar').offsetHeight);
    return of(
      `calc(100vh - ${
        document.getElementById('toolbar').offsetHeight +
        this.bikeStationCardHeight
      }px)`
    );
  }

  setBikeStationCardHeight(height: number): void {
    this.bikeStationCardHeight = height;
  }
}
