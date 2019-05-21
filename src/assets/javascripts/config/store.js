import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const rootMiddleWare =
  process.env.NODE_ENV === 'development'
    ? applyMiddleware(sagaMiddleware, logger)
    : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, rootMiddleWare);

sagaMiddleware.run(rootSaga);

export default store;
