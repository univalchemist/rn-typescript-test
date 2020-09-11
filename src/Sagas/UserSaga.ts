import {all, takeLatest} from 'redux-saga/effects';

import {UserTypes} from '../Store/User/Actions';
import getUsers from './Users/getUsers';
import getUser from './User/getUser';

export default function* root() {
  yield all([
    // Get user
    takeLatest(UserTypes.GET_USER, (param: any) => getUser(param)),
    // Get users
    takeLatest(UserTypes.GET_USERS, getUsers),
  ]);
}
