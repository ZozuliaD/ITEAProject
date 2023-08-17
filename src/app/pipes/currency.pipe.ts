import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currPipe'
})
export class CurrPipePipe implements PipeTransform {

  transform(value: string | null, ...args: unknown[]): unknown {
    return value?.slice(0, 1) +  " " + value?.slice(1);
  }

}
