import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[User] Login',
  props<{ username: string; token: string }>()
);

export const logout = createAction('[User] Logout');