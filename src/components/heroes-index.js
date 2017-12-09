import React, { Component } from 'react';
import style from '../../style/main.scss';

import HeroesSearch from '../containers/heroes-search';
import HeroesList from '../containers/heroes-list';
import HeroesHeader from './heroes-header';

export default class HeroesIndex extends Component {
  render() {
    return (
      <div className="row">
        <HeroesHeader />
        <div className="main col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <HeroesSearch />
          <HeroesList />
        </div>
      </div>
    );
  }
}
