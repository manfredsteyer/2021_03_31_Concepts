import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt: 'short' | 'long'): string {

    console.debug('transform!');

    let long, short;

    switch(value) {
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fulsbüttel - Helmut Schmidt';
        break;
      case 'München':
        short = 'MUC';
        long = 'Airport Munich International - Franz Josef Strauß';
        break;
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      default:
        short = long = value;
    }

    if (fmt === 'short') return short;
    return long;

  }

}
