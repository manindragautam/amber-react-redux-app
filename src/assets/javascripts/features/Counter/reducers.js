import { Types } from './sauces';

const initialState = {
  value: 0,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.INCREMENT:
      return { ...state, value: state.value + 1 };
    case Types.DECREMENT:
      return { ...state, value: state.value - 1 };
    default:
      return state;
  }
};

export default countReducer;
