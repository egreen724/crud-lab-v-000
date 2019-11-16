
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
  switch (action.type) {
    case "ADD_RESTAURANT":
      const restaurant = {
        id: cuid(),
        text: action.text.name
      }
      return {...state, restaurants: [...state.restaurants, restaurant]};

    case "DELETE_RESTAURANT":
      const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id);
      return {restaurants};

    case "ADD_REVIEW":
      const review = {
        id: cuid(),
        text: action.text.review,
        restaurantId: action.text.restaurantId
      }
      return {...state, reviews: [...state.reviews, review]};

    case "DELETE_REVIEW":
      const reviews = state.reviews.filter(review => review.id !== action.id);
      return {restaurants};

    default:
      return state;
  }
}
