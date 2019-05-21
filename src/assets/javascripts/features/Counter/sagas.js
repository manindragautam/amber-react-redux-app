import { put, takeLatest, call } from 'redux-saga/effects';
import { Types } from './sauces';

export const delay = ms => new Promise(res => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: Types.INCREMENT });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeLatest(Types.INCREMENT_ASYNC, incrementAsync);
}
