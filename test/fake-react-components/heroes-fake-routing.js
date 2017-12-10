import React, { Component } from 'react';
import { MemoryRouter, Route, Switch } from "react-router-dom";
import HeroesDetail from '../../src/containers/heroes-detail';
import HeroesIndex from '../../src/components/heroes-index';

export default class HeroesFakeRouting extends Component {
  render() {
    return (
      <MemoryRouter initialEntries={[ '/heroes/1' ]}>
        <Switch>
          <Route path="/heroes/:id" component={HeroesDetail} />
          <Route path="/" component={HeroesIndex} />
        </Switch>
      </MemoryRouter>
    );
  }
}
