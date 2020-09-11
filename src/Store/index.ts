import {combineReducers} from 'redux';
import {reducer as UserReducer} from './User/Reducers';

import rootSaga from '../Sagas/index';
import configureStore from './CreateStore';

export default () => {
  const rootReducer = combineReducers({
    user: UserReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
