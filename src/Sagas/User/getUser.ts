import {put} from 'redux-saga/effects';
import Api from '../../Shared/Api';

import UserActions from '../../Store/User/Actions';

interface IParam {
  id: number;
}
function* getUser(param: IParam) {
  try {
    yield put(UserActions.getUserLoading());
    const user = yield Api.getUser(param.id);
    yield put(UserActions.getUserSuccess(user));
  } catch (error) {
    yield put(UserActions.getUserFailure(error));
  }
}

export default getUser;
