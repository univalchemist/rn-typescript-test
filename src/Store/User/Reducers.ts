import {createReducer} from 'reduxsauce';
import {INITIAL_STATE} from './InitialState';
import {UserTypes} from './Actions';

const getUsersLoading = (state: any) => ({
  ...state,
  getUsersLoading: true,
  getUsersError: null,
});
const getUsersSuccess = (state: any, payload: any) => ({
  ...state,
  getUsersLoading: false,
  users: payload.users,
  getUsersError: null,
});
const getUsersFailure = (state: any, payload: any) => ({
  ...state,
  getUsersError: payload.error.message,
  getUsersLoading: false,
});

const getUserLoading = (state: any) => ({
  ...state,
  getUserLoading: true,
  getUserError: null,
});
const getUserSuccess = (state: any, payload: any) => ({
  ...state,
  getUserLoading: false,
  user: payload.user,
  getUserError: null,
});
const getUserFailure = (state: any, payload: any) => ({
  ...state,
  getUserError: payload.error.message,
  getUserLoading: false,
});

export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.GET_USERS_LOADING]: getUsersLoading,
  [UserTypes.GET_USERS_SUCCESS]: getUsersSuccess,
  [UserTypes.GET_USERS_FAILURE]: getUsersFailure,
  //
  [UserTypes.GET_USER_LOADING]: getUserLoading,
  [UserTypes.GET_USER_SUCCESS]: getUserSuccess,
  [UserTypes.GET_USER_FAILURE]: getUserFailure,
});
