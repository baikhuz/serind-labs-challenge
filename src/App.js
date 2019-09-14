import React from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';

import * as actionCreator from './actions/actions';

export default function App() {
  // useSelector() is used to get the state from redux
  const counter = useSelector(state => state.counter);

  // useDispatch() is used to dispatch actions
  const dispatch = useDispatch();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter: {counter}</h1>
        <button onClick={() => dispatch(actionCreator.increment(2))}>
          Increment 2
        </button>
        <button onClick={() => dispatch(actionCreator.decrement(-2))}>
          Decrement 2
        </button>
      </header>
    </div>
  );
}
