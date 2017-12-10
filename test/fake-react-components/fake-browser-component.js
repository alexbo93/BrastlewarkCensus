import React, { Component } from 'react';
import { MemoryRouter, Route, Switch } from "react-router-dom";
import HeroesList from '../../src/containers/heroes-list';

export default class FakeRouter extends Component {
  render() {
    return (
      <MemoryRouter>
        <HeroesList />
      </MemoryRouter>
    );
  }
}
