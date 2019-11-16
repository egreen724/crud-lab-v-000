import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    debugger;
    return (

      <div>
        <ReviewInput addReview={this.props.addReview} restaurantID={this.props.restaurant.id}/>
        <Reviews deleteReview={this.props.deleteReview} reviews={this.props.reviews}/>
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
    addReview: text => dispatch({type: "ADD_REVIEW", text}),
    deleteReview: id => dispatch({type: "DELETE_REVIEW", id})
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
