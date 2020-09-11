import {put} from 'redux-saga/effects';
import Api from '../../Shared/Api';

import UserActions from '../../Store/User/Actions';

function* getUsers() {
  try {
    yield put(UserActions.getUsersLoading());
    const users = yield Api.getUsers();
    yield put(UserActions.getUsersSuccess(users));
  } catch (error) {
    yield put(UserActions.getUsersFailure(error));
  }
}

export default getUsers;
