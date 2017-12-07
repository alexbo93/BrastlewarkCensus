import React, { Component } from 'react';
import style from '../../style/main.scss';

import HeroesSearch from '../containers/heroes-search.js';
import HeroesList from '../containers/heroes-list.js';

export default class HeroesIndex extends Component {
  render() {
    return (
      <div>
        <HeroesSearch />
        <HeroesList />
      </div>
    );
  }
}
