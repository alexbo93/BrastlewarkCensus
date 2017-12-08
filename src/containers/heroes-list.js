import React, { Component } from 'react';
import { connect } from 'react-redux'; //Glue between react and redux
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { fetchHeroes } from '../actions/index';
import Utils from '../utils';

class HeroesList extends Component {
    constructor(props) {
      super(props)

      this.getHeroesListBySearch = this.getHeroesListBySearch.bind(this);
    }

    getHeroesListBySearch() {
      // If search criterion has been set, heroe list will be built over this
      // if not, the list will be original heroes list
      let current = this.props.search && this.props.search != "" ? (
        Utils.getMatchBySearch(this.props.search, this.props.heroes.Brastlewark)
      ) : (
        this.props.heroes.Brastlewark
      )
      return current;
    }

    renderList() {
      // TODO: Improve the check that heroes array has content
      let heroes = this.getHeroesListBySearch();
      if(heroes && heroes.length > 0) {
        return heroes.map((heroe) => {
          return (
            <li className="list-group-item" key={heroe.id}>
              <Link to={`/heroes/${heroe.id}`}>
                  {heroe.name}
              </Link>
            </li>
          );
        });
      }else if (heroes && heroes.length == 0) {
        return <div>No results found with this search criterion</div>
      }
      // If heroes is not existing yet is because it is still loading..
      return (<div>Loading...</div>);
    }

    render() {
        return (
          <ul>{this.renderList()}</ul>
        );
    }
}

// Takes the needed piece of app state and maps it into inner props
// This will make that, whenever global state changes, this component will
// rerender the list of heroes.
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of HeroesList
    console.log('state in mapStateToProps: ',state);
    return {
        heroes: state.heroes,
        search: state.search
    };
}

// Connect takes a function and component and creates a container
export default connect(mapStateToProps, null)(HeroesList);
