import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SelectedDateState } from './selected-date.interface';
import { selectedDateKey } from './selected-date.reducer';

export const selectSelectedDateFeature =
  createFeatureSelector<SelectedDateState>(selectedDateKey);

export const selectSelectedDate = createSelector(
  selectSelectedDateFeature,
  (state) => state.selectedDate
);
