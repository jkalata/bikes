import {
  IBikeListRequestResponse,
  IBikeStation,
} from './../interfaces/bikes.interfaces';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BikesService {
  constructor(private http: HttpClient) {}

  getBikesStationList(): Observable<IBikeStation[]> {
    return this.http
      .get<IBikeListRequestResponse>(environment.apiURL)
      .pipe(map((response) => response.features));
  }
}
