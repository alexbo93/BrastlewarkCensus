import React, { Component } from 'react';
import { connect } from 'react-redux'; //Glue between react and redux
import { bindActionCreators } from 'redux';
import { Link } from "react-router-dom";
import { fetchHeroes } from '../actions/index';

class HeroesList extends Component {
    constructor(props) {
      super(props)
      console.log("this.props in constructor: ",this.props);
      this.state = {
        currentHeroes: []
      }
    }

    componentDidMount() {
      if(this.props.search && this.props.search != "") {
        console.log('hola voy a crear nueva lista');
        this.setState({currentHeroes: Utils.getMatchBySearch(this.props.search, this.props.heroes)});
      }else{
        console.log('this props heroes in componenDidMount: ',this.props.heroes.Brastlewark);
        this.setState({currentHeroes: this.props.heroes.Brastlewark});
      }
    }
    renderList() {
      // TODO: Improve the check that heroes array has content
      console.log('this state currentHeroes: ',this.state.currentHeroes);
      if(this.state.currentHeroes && this.state.currentHeroes.length > 0) {
        return this.state.currentHeroes.map((heroe) => {
          return (
            <li className="list-group-item" key={heroe.id}>
              <Link to={`/heroes/${heroe.id}`}>
                  {heroe.name}
              </Link>
            </li>
          );
        });
      }
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
    return {
        heroes: state.heroes,
        search: state.search
    };
}

// Connect takes a function and component and creates a container
export default connect(mapStateToProps, null)(HeroesList);
