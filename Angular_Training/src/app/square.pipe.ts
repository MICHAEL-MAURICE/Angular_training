import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
})
export class SquarePipe implements PipeTransform {
  transform(value: any, ...args: any[]): unknown {
    return value * value * args[0];
  }
}
