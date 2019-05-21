import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'HOCs/Layout';

const Counter = ({ value, increment, decrement, incrementAsync }) => (
  <div>
    <button type="button" onClick={incrementAsync}>
      Increment after 1 second
    </button>{' '}
    <button type="button" onClick={increment}>
      Increment
    </button>{' '}
    <button type="button" onClick={decrement}>
      Decrement
    </button>
    <hr />
    <div>Clicked: {value} times</div>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
};

export default Layout(Counter);
