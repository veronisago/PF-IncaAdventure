import axios from "axios";
import {GET_REVIEWS, GET_REVIEWS_BY_RATING, GET_REVIEWS_BY_WORD, GET_REVIEWS_BY_ID} from "../constantes";

let {REACT_APP_BASE_URL} = process.env


export function getReviews(){
  return async function (dispatch){
    try {
      let reviews = await axios.get(`${REACT_APP_BASE_URL}/reviews`, {});
      return dispatch({
        type: GET_REVIEWS,
        payload: reviews.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getReviewsByRating(name){
  // trae los que incluyan name, puede ser mas de 1
  return async function (dispatch){
    try {
      let reviewsByName = await axios.get(`${REACT_APP_BASE_URL}/reviews?name=${name}`, {});
      return dispatch({
        type: GET_REVIEWS_BY_RATING,
        payload: reviewsByName.data
      })
    } catch (error) {
      console.log(error);
    }
  };
};

export function getReviewsByWord(word){
  // trae los que incluyan name, puede ser mas de 1
  return async function (dispatch){
    try {
      let reviewsByWord = await axios.get(`${REACT_APP_BASE_URL}/reviews?word=${word}`, {});
      return dispatch({
        type: GET_REVIEWS_BY_WORD,
        payload: reviewsByWord.data
      })
    } catch (error) {
      console.log(error);
    }
  };
};

export function getReviewsById(id){
  return async function (dispatch){
    try {
      let reviewsById = await axios.get(`${REACT_APP_BASE_URL}/reviews/${id}`, {});
      return dispatch({
        type: GET_REVIEWS_BY_ID,
        payload: reviewsById.data
      })
    } catch (error) {
      console.log(error);
    }
  };
};