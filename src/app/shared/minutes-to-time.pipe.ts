import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minutesToTime'
})
export class MinutesToTimePipe implements PipeTransform {

  transform(value: number): any {
    if (!isNaN(value)) {
      if (value < 60) {
        return value.toString() + ' min';
      }
      else {
        const hours = Math.floor(value / 60);
        const minutes = Math.floor(value - (hours * 60));

        if (minutes > 0) {
          return hours.toString() + ' hr ' + minutes.toString() + ' min';
        }
        else {
          return hours.toString() + ' hr';
        }
      }

    }
    return;
  }

}
