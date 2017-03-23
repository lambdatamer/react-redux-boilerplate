import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import configureStore from './store';
import App from './containers/App';

const store = configureStore();

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={App} />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));
