import { createAction, props } from '@ngrx/store';

export const changeSelectedDate = createAction(
  '[Selected Date] change',
  props<{ newDate: Date }>()
);
