import { fork } from 'redux-saga/effects';

import auth from './auth.saga';
import notification from './notification.saga';

export default function* rootSagas() {
  yield fork(auth);
  yield fork(notification);
}
