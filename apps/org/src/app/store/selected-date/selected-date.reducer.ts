// counter.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { changeSelectedDate } from './selected-date.actions';
import { SelectedDateState } from './selected-date.interface';

export const selectedDateKey = 'selectedDate';

const selectedDateInitialState: SelectedDateState = {
  selectedDate: new Date(),
};

export const selectedDateReducer = createReducer(
  selectedDateInitialState,
  on(changeSelectedDate, (state, { newDate }) => ({
    ...state,
    selectedDate: newDate,
  }))
);
