import { Provider } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { store } from '../../store';

import { routes } from '../../routes';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
