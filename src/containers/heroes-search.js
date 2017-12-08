import React, { Component } from 'react';
import { connect } from 'react-redux'; //Glue between react and redux
import { bindActionCreators } from 'redux';
import { setSearch } from '../actions/index';

class HeroesSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };

    // Binding methods to be able to use component global "this" inside them
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ search: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // New Search term will be set in store state
    this.props.setSearch(this.state.search);
    // this.setState({ search: "" });
  }
  render() {
      return (
        <form onSubmit={this.onFormSubmit} className='input-group margin_b'>
          <input
            placeholder='Type the name of a Hero...'
            onChange={this.onInputChange}
            value={this.state.search}
            className="form-control input"
            />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">Search</button>
          </span>
        </form>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setSearch }, dispatch);
}

// Connect takes a function and component and creates a container
export default connect(null, mapDispatchToProps)(HeroesSearch);
