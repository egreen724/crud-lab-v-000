import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state = {
    review: '',
    restaurantId: this.props.restaurantID
  }

  handleChange = (event) => {
    this.setState({
      review: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addReview(this.state)
    this.setState({
      review: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Review</label>
          <input type="text" value={this.state.review} onChange={(event) => this.handleChange(event)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};


export default ReviewInput;
