import React, { useContext } from 'react';
import TestContext from '../context/test/testContext';

const StateReceiver = () => {
  const testContext = useContext(TestContext);
  const { test } = testContext;

  return (
    <div>
      <h1>TestContex content is {`"${test}"`}</h1>
    </div>
  );
};

export default StateReceiver;
