import * as types from './types';

export const onIncrement = () => ({
  type: types.INCREMENT,
});
export const onDecrement = () => ({
  type: types.DECREMENT,
});
export const onIncrementAsync = () => ({
  type: types.INCREMENT_ASYNC,
});
