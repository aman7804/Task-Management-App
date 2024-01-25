import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import authSaga from './auth/saga';

export function* rootSaga() {
  yield fork(authSaga);
}

const sagaMiddleware = createSagaMiddleware();
export default sagaMiddleware;