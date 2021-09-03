import { Pipe, PipeTransform } from '@angular/core';
import convertDistance from 'geolib/es/convertDistance';

@Pipe({
  name: 'distance',
})
export class DistancePipe implements PipeTransform {
  transform(value: number): string {
    if (value === undefined) {
      return 'N/A';
    }
    if (value > 1000) {
      return `${convertDistance(value, 'km').toFixed(2)} km`;
    } else {
      return `${value} m`;
    }
  }
}
