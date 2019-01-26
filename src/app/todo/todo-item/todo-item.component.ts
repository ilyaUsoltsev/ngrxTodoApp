import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.reducers';
import { Store } from '@ngrx/store';
import { ToggleTodoAction, EditTodoAction, DeleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('txtInputNew') txtInputNew: ElementRef;

  chkField: FormControl;
  txtInput: FormControl;

  editable: boolean;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.chkField = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, Validators.required);
    this.chkField.valueChanges.subscribe( () => {
          const action = new ToggleTodoAction(this.todo.id);
          this.store.dispatch(action);
        }
    );
  }

  edit() {
    this.editable = true;
    setTimeout( () => {
      this.txtInputNew.nativeElement.select();
    }, 1 );
  }

  onEditOver() {
    this.editable = false;

    if (this.txtInput.invalid) {
      return;
    }

    if ( this.txtInput.value === this.todo.text ) {
      return;
    }

    const action = new EditTodoAction(this.todo.id, this.txtInput.value);
    this.store.dispatch(action);
  }

  deleteTodo() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
