import { createDefaultPolicy } from './trustedtypes';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import React from 'react';
import { store, history} from './store';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';

// Allow http: and https: URLs
createDefaultPolicy({
    createURL: function(s) {
      const u = new URL(s, document.baseURI);
      if (['http:', 'https:'].includes(u.protocol)) {
        return s;
      }
      throw new TypeError('Invalid URL!');
    },
});

ReactDOM.render((
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>

), document.getElementById('root'));
