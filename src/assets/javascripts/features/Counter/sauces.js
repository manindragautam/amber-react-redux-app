import { createActions } from 'reduxsauce';

export const { Types, Creators } = createActions({
  increment: [],
  decrement: [],
  incrementAsync: [],
});
