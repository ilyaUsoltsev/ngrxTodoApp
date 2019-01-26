import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: Todo[] = [];
  constructor(private store: Store<AppState>) { }
  filter: string;

  ngOnInit() {
    this.store.subscribe( state => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }

}
