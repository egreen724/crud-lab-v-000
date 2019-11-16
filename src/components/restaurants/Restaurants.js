import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {
    const { restaurants } = this.props;
    return(
      <ul>
        {restaurants.map(restaurant =>
          <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={this.props.deleteRestaurant}/>
        )}
      </ul>
    );
  }
};

export default Restaurants;
