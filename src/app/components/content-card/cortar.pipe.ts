import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'cortar',
})

export class CortarPipe implements PipeTransform {

  transform(values: any, ...args: any[]) {
      for(const value of values){

      }
  }
}
