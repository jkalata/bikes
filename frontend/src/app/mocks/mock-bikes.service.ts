import { bikeStationsMock } from './../mocks/mocks';
import { IBikeStation } from './../interfaces/bikes.interfaces';
import { Observable, of } from 'rxjs';
export class MockBikesService {
  getBikesStationList(): Observable<IBikeStation[]> {
    return of(bikeStationsMock);
  }
}
