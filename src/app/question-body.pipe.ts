import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'questionBody'
})
export class QuestionBodyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.body;
  }

}
