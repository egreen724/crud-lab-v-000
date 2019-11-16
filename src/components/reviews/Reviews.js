import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    debugger;

    const { reviews, restaurantId, deleteReview } = this.props;
    const specificReviews = reviews.filter(review => review.restaurantId === restaurantId)
    return (
      <ul>
        {specificReviews.map((review, index) =>
          return <Review key={index} review={review} deleteReview={deleteReview}/>
        )}
      </ul>
    );
  }
};

export default Reviews;
