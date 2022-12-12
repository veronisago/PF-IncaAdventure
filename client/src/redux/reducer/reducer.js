import {
  GET_USERS,
  GET_USERS_BY_NAME,
  GET_USER_BY_ID,
  GET_USER_BY_USERNAME,
  GET_USER_BY_EMAIL,
  GET_STORES,
  GET_STORES_BY_NAME,
  GET_STORE_BY_ID,
  GET_REVIEWS,
  GET_REVIEWS_BY_RATING,
  GET_REVIEWS_BY_WORD,
  GET_REVIEWS_BY_ID,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_NAME,
  GET_PRODUCTS_BY_ID,
  GET_PRODUCTS_BY_ORDER,
  GET_ACTIVITIES,
  GET_ACTIVITIES_BY_NAME,
  GET_ACTIVITY_BY_ID,
  GET_ACTIVITIES_BY_ORDER
} from "../actions/constantes";

let initialState = {
  allUsers: [],
  allStores: [],
  allReviews: [],
  allProducts: [],
  allActivities: [],
  userProfile: {}
};

function rootReducer(state = initialState, action){
  switch(action.type){
    case GET_USERS:
      return{
        ...state,
        allUsers: action.payload
      };
    case GET_USERS_BY_NAME:
      return{
        ...state,
        allUsers: action.payload
      };
    case GET_USER_BY_ID:
      return{
        ...state,
        allUsers: action.payload
      };
    case GET_USER_BY_USERNAME:
      return{
        ...state,
        userProfile: action.payload
      };
    case GET_USER_BY_EMAIL:
      return{
        ...state,
        userProfile: action.payload
      };
    case GET_STORES:
      return{
        ...state,
        allStores: action.payload
      };
    case GET_STORES_BY_NAME:
      return{
        ...state,
        allStores: action.payload
      };
    case GET_STORE_BY_ID:
      return{
        ...state,
        allStores: action.payload
      };
    case GET_REVIEWS:
      return{
        ...state,
        allReviews: action.payload
      };
    case GET_REVIEWS_BY_RATING:
      return{
        ...state,
        allReviews: action.payload
      };
    case GET_REVIEWS_BY_WORD:
      return{
        ...state,
        allReviews: action.payload
      };
    case GET_REVIEWS_BY_ID:
      return{
        ...state,
        allReviews: action.payload
      };
    case GET_PRODUCTS:
      return{
        ...state,
        allProducts: action.payload
      };
    case GET_PRODUCTS_BY_NAME:
      return{
        ...state,
        allProducts: action.payload
      };
    case GET_PRODUCTS_BY_ID:
      return{
        ...state,
        allProducts: action.payload
      };
    case GET_PRODUCTS_BY_ORDER:
      return{
        ...state,
        allProducts: action.payload
      };
    case GET_ACTIVITIES:
      return{
        ...state,
        allActivities: action.payload
      };
    case GET_ACTIVITIES_BY_NAME:
      return{
        ...state,
        allActivities: action.payload
      };
    case GET_ACTIVITY_BY_ID:
      return{
        ...state,
        allActivities: action.payload
      };
    case GET_ACTIVITIES_BY_ORDER:
      return{
        ...state,
        allActivities: action.payload
      };
    default:
      return{
        ...state
      };
  };
};

export default rootReducer;