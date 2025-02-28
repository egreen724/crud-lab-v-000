import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (

      <div>
        <ReviewInput addReview={this.props.addReview} restaurantID={this.props.restaurant.id}/>
        <Reviews deleteReview={this.props.deleteReview} restaurantID={this.props.restaurant.id} reviews={this.props.reviews}/>
      </div>
    )
  }
}
const mapStateToProps = state => {
 return {
   reviews: state.reviews
 }
}

const mapDispatchToProps = dispatch => (
  {
    addReview: review => dispatch({type: "ADD_REVIEW", review}),
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
