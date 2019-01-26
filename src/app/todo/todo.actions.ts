import {Action} from '@ngrx/store';
import { ToggleAction } from '@ngrx/store-devtools/src/actions';
import { Todo } from './model/todo.model';

export const ADD_TODO = '[TODO] Add todo';
export const TOGGLE_TODO = '[TODO] Toggle todo';
export const EDIT_TODO = '[TODO] Edit todo';
export const DELETE_TODO = '[TODO] DELETE todo';
export const DELETE_ALL_TODOS = '[TODO] DELETE All todo';
export const TOGGLE_ALL_TODOS = '[TODO] Toggle all todos';

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public text: string) {}
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}
export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;

  constructor(public id: number, public text: string) {}
}
export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;
  constructor(public id: number) {}
}
export class DeleteAllTodosAction implements Action {
  readonly type = DELETE_ALL_TODOS;
}
export class ToggleAllTodosAction implements Action {
  readonly type = TOGGLE_ALL_TODOS;

  constructor(public completed: boolean) {}
}

export type actions = AddTodoAction |
                      ToggleTodoAction |
                      EditTodoAction |
                      DeleteTodoAction |
                      DeleteAllTodosAction |
                      ToggleAllTodosAction;
