import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './routes';
import { Provider } from 'react-redux';
import createStoreInstance from './store';
import { hydrateRoot } from 'react-dom/client';

const store = createStoreInstance(window?.__preloadedState__);

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RoutesList />
      </BrowserRouter>
    </Provider>
  );
};

const root = document.getElementById('root');
hydrateRoot(root, <App />);
