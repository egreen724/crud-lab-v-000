import React, { Component } from 'react';

class Review extends Component {

  render() {
    debugger;
    const { review } = this.props

    return (
      <div>
        <li>
          Review: {review.text}
        </li>
        <button onClick={() => this.props.deleteReview(review.id)}> X </button>
      </div>
    );
  }

};

export default Review;
