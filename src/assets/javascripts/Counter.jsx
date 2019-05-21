import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value, onIncrement, onDecrement, onIncrementAsync }) => (
  <div>
    <button type="button" onClick={onIncrementAsync}>
      Increment after 1 second
    </button>{' '}
    <button type="button" onClick={onIncrement}>
      Increment
    </button>{' '}
    <button type="button" onClick={onDecrement}>
      Decrement
    </button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onIncrementAsync: PropTypes.func.isRequired,
};

export default Counter;
