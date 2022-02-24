import { useState } from 'react';

import { useSelector } from 'react-redux';

import { RootState } from '../../store';

import logo from './../../assets/images/logo.svg';

import './Home.css';

export function Home() {
  const count = useSelector((state: RootState) => state.counter);

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />

      <p>Hello Vite + React!</p>

      <p>
        <button type="button" onClick={() => {}}>
          count is: {count}
        </button>
      </p>

      <p>
        Edit <code>App.tsx</code> and save to test HMR updates.
      </p>

      <p>
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
      </p>
    </header>
  );
}
