import {all, fork} from 'redux-saga/effects';
import UserSaga from './UserSaga';

export default function* root() {
  yield all([
    //
    fork(UserSaga),
  ]);
}
