import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    // const { reviews, restaurantId, deleteReview } = this.props;
    // debugger;
    // const selectedReviews = this.props.reviews.filter(review => review.restaurantId === restaurantId);
    // const reviewList = selectedReviews.map((review, index) => {
    //     return <Review key={index} review={review} deleteReview={deleteReview} />
    //   })
    //
    // return (
    //   <ul>
    //     {reviewList}
    //   </ul>
    // );

    const { reviews, restaurantId, deleteReview } = this.props;
   const associatedReviews = reviews.filter(review => review.restaurantId === restaurantId);

   const reviewList = associatedReviews.map((review, index) => {
     return <Review key={index} review={review} deleteReview={deleteReview} />
   })

   return (
     <div>
       <ul>
         {reviewList}
       </ul>
     </div>
   );
 }
};

export default Reviews;
