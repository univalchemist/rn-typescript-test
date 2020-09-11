import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  getUsers: null, // GET_USERS
  getUsersLoading: null, // GET_USERS_SUCCESS
  getUsersSuccess: ['users'], // GET_USERS_SUCCESS
  getUsersFailure: ['error'], // GET_USERS_FAILURE
  //
  getUser: ['id'], // GET_USER
  getUserLoading: null, // GET_USER_SUCCESS
  getUserFailure: ['error'], // GET_USER_FAILURE
  getUserSuccess: ['user'], // GET_USER_SUCCESS
});

export const UserTypes = Types;

export default Creators;
