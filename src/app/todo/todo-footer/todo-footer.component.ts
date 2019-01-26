import { Component, OnInit } from '@angular/core';
import { filterValues, SetFilterAction } from '../../filter/filter.actions';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { DeleteAllTodosAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filterValues: filterValues[] = ['all', 'active', 'completed'];
  currentFilter: filterValues;
  active: number;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.countActive(state.todos);
      this.currentFilter = state.filter;
    });
  }

  chooseFilter(filter: filterValues) {

    const action = new SetFilterAction(filter);
    this.store.dispatch(action);

  }

  countActive(todos: Todo[]) {
    this.active = todos.filter(todo => !todo.completed).length;
  }

  clearCompleted() {
    const action = new DeleteAllTodosAction();
    this.store.dispatch(action);
  }

}
