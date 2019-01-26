import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo.model';
import { filterValues } from './filter.actions';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: filterValues): Todo[] {

    switch (filter) {
      case 'completed':
        return todos.filter( todo => todo.completed);

      case 'active':
        return todos.filter( todo => !todo.completed);

      case 'all':
       return todos;

      default:
        return todos;
    }
  }

}
