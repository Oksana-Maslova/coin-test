import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes from './routes';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import coin from './store/reducers/index';

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    coin,
    composeEnhancers(applyMiddleware(...middleware))
    )

function App() {
  return (
    <Provider store={store}>
      <Router>
        {renderRoutes()}
      </Router>
    </Provider>
  );
}

export default App;
