
import * as fromFilter from './filter.actions';

const initialState: fromFilter.filterValues = 'all';

export function filterReducer (state = initialState,
  action: fromFilter.actions): fromFilter.filterValues {

    switch (action.type) {
      case fromFilter.SET_FILTER:
        return action.filter;
      default:
          return state;
    }
  }
