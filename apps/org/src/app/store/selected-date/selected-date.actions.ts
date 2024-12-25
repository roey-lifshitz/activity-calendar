import { createAction, props } from '@ngrx/store';

export const changeDate = createAction(
  '[Selected Date] change',
  props<{ newDate: Date }>()
);
