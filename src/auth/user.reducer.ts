import { createReducer, on } from '@ngrx/store';
import { login, logout } from './user.actions';
import { UserState } from '../interface/user';

export const initialState: UserState = {
  loggedIn: false,
  email: null,
  token: null
};

export const userReducer = createReducer(
  initialState,
  on(login, (state, { username, token }) => ({
    ...state,
    loggedIn: true,
    username,
    token
  })),
  on(logout, (state) => ({
    ...state,
    loggedIn: false,
    username: null,
    token: null
  }))
);