import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addRestaurant(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Restaurant Name</label>
          <input type="text" value={this.state.name} onChange={(event) => this.handleChange(event)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
