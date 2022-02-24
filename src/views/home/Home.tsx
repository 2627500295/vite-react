import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RootState, Dispatch } from '../../store';

import logo from './../../assets/images/logo.svg';

import './Home.css';

export function Home() {
  const dispatch: Dispatch = useDispatch();

  const count = useSelector((state: RootState) => state.counter);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <p>Hello Vite + React!</p>

      <p>count is: {count}</p>

      <div>
        <button type="button" onClick={() => dispatch.counter.increment(1)}>
          +1
        </button>

        {' | '}

        <button
          type="button"
          onClick={() => dispatch.counter.incrementAsync(1)}
        >
          Async +1
        </button>

        {' | '}

        <button
          type="button"
          onClick={() => dispatch.counter.incrementAsync(5)}
        >
          Async +5
        </button>
      </div>

      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>

      <div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {' | '}

        <a
          className="App-link"
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
      </div>
    </header>
  );
}
