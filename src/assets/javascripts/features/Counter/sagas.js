import { put, takeLatest, call } from 'redux-saga/effects';
import * as types from './types';
export const delay = ms => new Promise(res => setTimeout(res, ms));

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield call(delay, 1000);
  yield put({ type: types.INCREMENT });
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
  yield takeLatest(types.INCREMENT_ASYNC, incrementAsync);
}
