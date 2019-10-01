import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import TestContext from './testContext';
import testReducer from './testReducer';
import TEST from '../types';

const TestState = props => {
  const { children } = props;

  const initialState = 'lol';
  const [state, dispatch] = useReducer(testReducer, initialState);

  const tryTest = input => {
    dispatch({
      type: TEST,
      payload: input
    });
  };

  return (
    <TestContext.Provider
      value={{
        test: state,
        tryTest
      }}
    >
      {children}
    </TestContext.Provider>
  );
};

TestState.propTypes = {
  children: PropTypes.node.isRequired
};

export default TestState;
