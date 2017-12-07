import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchHeroes } from "../actions/index";

class HeroesDetail extends Component {
  // componentDidMount() {
  //   this.props.fetchHeroes();
  // }
  // onDeleteClick() {
  //   const { id } = this.props.match.params;
  //
  //   this.props.deletePost(id, () => {
  //     this.props.history.push("/");
  //   });
  // }

  render() {
    const { id } = this.props.match.params;
    const heroes = this.props.heroes.Brastlewark;

    // We need to load heroes list before retrieving our heroe information
    if (!heroes) {
      return <div>Loading...</div>;
    }

    const heroe = heroes[id];
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <h3>{heroe.name}</h3>
        <h6>Categories: {heroe.age}</h6>
        <p>{heroe.hair_color}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log('heroes: ', state.heroes);
  return { heroes: state.heroes };
}

export default connect(mapStateToProps, null)(HeroesDetail);
