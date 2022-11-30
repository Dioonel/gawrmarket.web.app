import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'httpFilter'
})
export class HttpFilterPipe implements PipeTransform {

  transform(value: string): string {
    const filter = ['http://', 'https://'];

    const res = filter.some(string => value.includes(string));
    if(res) {
      return value;
    }
    return `http://${value}`;
  }

}
