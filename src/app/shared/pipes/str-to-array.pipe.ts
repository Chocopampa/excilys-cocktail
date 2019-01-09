import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strToArray'
})
export class StrToArrayPipe implements PipeTransform {

  transform(value: string): string[] {
    return value.split('\\n');
  }

}
