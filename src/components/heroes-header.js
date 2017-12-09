import React, { Component } from 'react';
import style from '../../style/main.scss';

export default class HeroesHeader extends Component {
  render() {
    return (
      <div>
        <h1>Brastlewark Census</h1>
        <h3 className="hidden-xs"><em><strong>For the most gossiper</strong></em></h3>
      </div>
    );
  }
}
