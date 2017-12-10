import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHeroes } from "../actions/index";

import HeroesHeader from '../components/heroes-header';

class HeroesDetail extends Component {
  constructor(props) {
    super(props);

    this.renderFriends = this.renderFriends.bind(this);
    this.renderJobs = this.renderJobs.bind(this);
  }

  renderFriends(friends, name) {
    if(friends.length > 0) {
      return friends.map((friend, key) => {
        return (
          <li className="list-group-item" key={key}>
            {friend}
          </li>
        );
      });
    }else{
      return (
        <div className="not-found">
          <i className="fa fa-frown-o fa-4x"></i>
          <span>{name} has no friends at all!</span>
        </div>
      );
    }
  }

  renderJobs(jobs, name) {
    if(jobs.length > 0) {
      return jobs.map((job, key) => {
        return (
          <li className="list-group-item" key={key}>
            {job}
          </li>
        );
      });
    }else {
      return (
        <div className="not-found">
          <i className="fa fa-frown-o fa-4x"></i>
          <span>{name} is currently unemployed!</span>
        </div>
      );
    }
  }

  render() {
    const { id } = this.props.match.params;
    const heroes = this.props.heroes.Brastlewark;

    // We need to load heroes list before retrieving our heroe information
    if (!heroes) {
      return (<div className="loader" />);
    }

    const heroe = heroes[id];
    const first_name = heroe.name.split(" ")[0];
    return (
      <div>
        <HeroesHeader />
        <div className="main col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2">
          <div className="detail-header row">

            <div className="col-xs-12 col-sm-6">
              <h3 className="heroe-name">{heroe.name}</h3>
              <img src={heroe.thumbnail} width="200" />
            </div>
          </div>
          <div className="detail-body row">
            <div className="col-xs-12 col-sm-6">
              <p><strong>Age:</strong> {heroe.age} years</p>
              <p><strong>Hair:</strong> {heroe.hair_color}</p>
              <p><strong>Friends</strong></p>
              <ul id="friends">{this.renderFriends(heroe.friends, first_name)}</ul>
              <hr className="visible-xs"/>
            </div>
            <div className="col-xs-12 col-sm-6">
              <p><strong>Height:</strong> {Math.round(heroe.height*10)/10} cm</p>
              <p><strong>Weight:</strong> {Math.round(heroe.weight*10)/10} kg</p>
              <p><strong>Jobs</strong></p>
              <ul id="jobs">{this.renderJobs(heroe.professions, first_name)}</ul>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <Link to="/" className="pull-right">
                <button className="btn btn-secundary">
                  To Index
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { heroes: state.heroes };
}

export default connect(mapStateToProps, null)(HeroesDetail);
