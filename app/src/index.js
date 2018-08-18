import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import { syncHistoryWithStore } from 'react-router-redux';
import register from './registerServiceWorker';

import App from './App';
import Home from './containers/Home';

import './styles/index';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      <Route component={App}>
        <Route path="/" component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

register();
