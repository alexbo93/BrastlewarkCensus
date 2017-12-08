import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleWare from './middlewares/promise_middleware';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { fetchHeroes } from './actions/index';

import HeroesIndex from './components/heroes-index';
import HeroesDetail from './components/heroes-detail';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleWare)(createStore);

const store = createStoreWithMiddleware(reducers);

store.dispatch(fetchHeroes());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/heroes/:id" component={HeroesDetail} />
          <Route path="/" component={HeroesIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
