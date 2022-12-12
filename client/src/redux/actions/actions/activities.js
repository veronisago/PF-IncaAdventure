import axios from "axios";
import {GET_ACTIVITIES, GET_ACTIVITIES_BY_NAME, GET_ACTIVITY_BY_ID, GET_ACTIVITIES_BY_ORDER} from "../constantes";

export function getActivities(){
  return async function (dispatch){
    try {
      let activities = await axios.get("http://localhost:3001/activities", {});
      return dispatch({
        type: GET_ACTIVITIES,
        payload: activities.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getActivitiesByName(name){
  // trae los que incluyan name, puede ser mas de 1
  return async function (dispatch){
    try {
      let activitiesByName = await axios.get(`http://localhost:3001/activities?name=${name}`, {});
      return dispatch({
        type: GET_ACTIVITIES_BY_NAME,
        payload: activitiesByName.data
      })
    } catch (error) {
      console.log(error);
    }
  };
};

export function getActivityById(id){
  return async function (dispatch){
    try {
      let activityById = await axios.get(`http://localhost:3001/activities/${id}`, {});
      return dispatch({
        type: GET_ACTIVITY_BY_ID,
        payload: activityById.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getActivitiesByOrder(order){
  return async function (dispatch){
    try {
      let activitiesByOrder = await axios.get(`http://localhost:3001/activities?order=${order}`, {});
      return dispatch({
        type: GET_ACTIVITIES_BY_ORDER,
        payload: activitiesByOrder.data
      })
    } catch (error) {
     console.log(error) ;
    }
  }
};

export function createActivity(payload){
  return async function (dispatch){
    try {
      let newActivity = await axios.post("http://localhost:3001/activities", payload);
      return newActivity;
    } catch (error) {
      console.log(error);
    }
  };
};