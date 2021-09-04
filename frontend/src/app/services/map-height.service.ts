import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MapHeightService {
  private bikeStationCardHeight: number;
  getMapHeight(): Observable<string> {
    return of(
      `calc(100vh - ${this.getToolbarHeight() + this.bikeStationCardHeight}px)`
    );
  }

  setBikeStationCardHeight(height: number): void {
    this.bikeStationCardHeight = height;
  }

  private getToolbarHeight(): number {
    return document.getElementById('toolbar').offsetHeight;
  }
}
