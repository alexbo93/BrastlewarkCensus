import React, { Component } from 'react';
import { connect } from 'react-redux'; //Glue between react and redux
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { fetchHeroes } from '../actions/index';
import Utils from '../utils';
import InfiniteScroll from 'react-infinite-scroller';

class HeroesList extends Component {
    constructor(props) {
      super(props)

      // Local state variable to handle infinite scroll
      this.state = {
        scroll: 1
      };

      this.getHeroesListBySearch = this.getHeroesListBySearch.bind(this);
    }

    getHeroesListBySearch() {
      // If search criterion has been set, heroe list will be built over this
      // if not, the list will be original heroes list
      // console.log('heroes Brastlewark in test: ',this.props.heroes);
      let current = this.props.search && this.props.search != "" ? (
        Utils.getMatchBySearch(this.props.search, this.props.heroes.Brastlewark)
      ) : (
        this.props.heroes.Brastlewark
      )
      return current;
    }

    renderList(heroes) {
      if(heroes && heroes.length > 0) {
        return heroes.map((heroe) => {
          return (
            <Link to={`/heroes/${heroe.id}`} key={heroe.id}>
              <li className="list-group-item">
                  {heroe.name}
              </li>
            </Link>
          );
        });
      }else if (heroes && heroes.length == 0) {
        return (
          <div className="not-found">
            <i className="fa fa-meh-o fa-4x"></i>
            <span>No results found with this search criterion</span>
          </div>
            );
      }
      // If heroes is not existing yet is because it is still loading..
      return (<div className="loader" />);
    }

    render() {
        const heroes = this.getHeroesListBySearch();
        return (
          <div>
            <h5><strong>Brastlewark Inhabitants</strong></h5>
            <div className="heroes-list">
              <ul>{this.renderList(heroes)}</ul>
            </div>
          </div>
        );
    }
}

// Takes the needed piece of app state and maps it into inner props
// This will make that, whenever global state changes, this component will
// rerender the list of heroes.
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // inside of HeroesList
    return {
        heroes: state.heroes,
        search: state.search
    };
}

// Connect takes a function and component and creates a container
export default connect(mapStateToProps, null)(HeroesList);
