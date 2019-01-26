import { Action } from '@ngrx/store';


export const SET_FILTER = '[Filter] set filter';
export type filterValues = 'all' | 'active' | 'completed';

export class SetFilterAction implements Action {
  readonly type = SET_FILTER;

  constructor(public filter: filterValues) {
  }
}

export type actions = SetFilterAction;
