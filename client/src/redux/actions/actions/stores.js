import axios from "axios";
import {GET_STORES, GET_STORES_BY_NAME, GET_STORE_BY_ID} from "../constantes";

export function getStores(){
  return async function (dispatch){
    try {
      let stores = await axios.get("http://localhost:3001/stores", {});
      return dispatch({
        type: GET_STORES,
        payload: stores.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getStoresByName(name){
  // trae los que incluyan name, puede ser mas de 1
  return async function (dispatch){
    try {
      let storesByName = await axios.get(`http://localhost:3001/stores?name=${name}`, {});
      return dispatch({
        type: GET_STORES_BY_NAME,
        payload: storesByName.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getStoreById(id){
  return async function (dispatch){
    try {
      let storeById = await axios.get(`http://localhost:3001/stores/${id}`, {});
      return dispatch({
        type: GET_STORE_BY_ID,
        payload: storeById.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};