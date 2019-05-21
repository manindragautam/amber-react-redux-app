import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import Counter from './Counter';
import reducer from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middleWare =
  process.env.NODE_ENV === 'development'
    ? applyMiddleware(sagaMiddleware, logger)
    : applyMiddleware(sagaMiddleware);

const store = createStore(reducer, middleWare);

sagaMiddleware.run(rootSaga);
const action = type => store.dispatch({ type });

const App = () => (
  <div>
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
    />
  </div>
);

function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

render();
store.subscribe(render);
