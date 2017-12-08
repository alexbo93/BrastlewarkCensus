import React, { Component } from 'react';
import style from '../../style/main.scss';

import HeroesSearch from '../containers/heroes-search.js';
import HeroesList from '../containers/heroes-list.js';

export default class HeroesIndex extends Component {
  render() {
    return (
      <div className="row">
        <div>
          <h1>Brastlewark Census</h1>
          <h3 className="hidden-xs"><em><strong>For the most gossiper</strong></em></h3>
        </div>
        <div className="main col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <HeroesSearch />
          <HeroesList />
        </div>
      </div>
    );
  }
}
