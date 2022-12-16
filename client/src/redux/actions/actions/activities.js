import axios from "axios";
import { GET_ACTIVITIES, GET_ACTIVITIES_BY_NAME, GET_ACTIVITY_BY_ID, GET_ACTIVITIES_BY_ORDER } from "../constantes";

let { REACT_APP_BASE_URL } = process.env


export function getActivities() {
  return async function (dispatch) {
    try {
      let activities = await axios.get(`${REACT_APP_BASE_URL}/activities`, {});
      return dispatch({
        type: GET_ACTIVITIES,
        payload: activities.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getActivitiesByName(name) {
  // trae los que incluyan name, puede ser mas de 1
  return async function (dispatch) {
    try {
      let activitiesByName = await axios.get(`${REACT_APP_BASE_URL}/activities?name=${name}`, {});
      return dispatch({
        type: GET_ACTIVITIES_BY_NAME,
        payload: activitiesByName.data
      })
    } catch (error) {
      console.log(error);
    }
  };
};

export function getActivityById(id) {
  return async function (dispatch) {
    try {
      let activityById = await axios.get(`${REACT_APP_BASE_URL}/activities/${id}`, {});
      return dispatch({
        type: GET_ACTIVITY_BY_ID,
        payload: activityById.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getActivitiesByOrder(order) {
  return async function (dispatch) {
    try {
      let activitiesByOrder = await axios.get(`${REACT_APP_BASE_URL}/activities?order=${order}`, {});
      return dispatch({
        type: GET_ACTIVITIES_BY_ORDER,
        payload: activitiesByOrder.data
      })
    } catch (error) {
      console.log(error);
    }
  }
};