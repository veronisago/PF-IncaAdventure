import axios from "axios";
import { GET_USERS, GET_USERS_BY_NAME, GET_USER_BY_ID, GET_USER_BY_USERNAME, GET_USER_BY_EMAIL } from "../constantes";


let {REACT_ENV_BASE_URL} = process.env

export function getUsers() {
  return async function (dispatch) {
    try {
      let users = await axios.get(`${REACT_ENV_BASE_URL}/users`, {});
      return dispatch({
        type: GET_USERS,
        payload: users.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getUsersByName(name) {
  // trae los que incluyan name, puede ser mas de 1
  return async function (dispatch) {
    try {
      let usersByName = await axios.get(`${REACT_ENV_BASE_URL}/users?name=${name}`, {});
      return dispatch({
        type: GET_USERS_BY_NAME,
        payload: usersByName.data
      })
    } catch (error) {
      console.log(error);
    }
  };
};

export function getUserById(id) {
  return async function (dispatch) {
    try {
      let userById = await axios.get(`${REACT_ENV_BASE_URL}/users/${id}`, {});
      return dispatch({
        type: GET_USER_BY_ID,
        payload: userById.data
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getUserByUsername(username) {
  return async function (dispatch) {
    try {
      let userByUsername = await axios.get(`${REACT_ENV_BASE_URL}/profile/${username}`, {});
      return dispatch({
        type: GET_USER_BY_USERNAME,
        payload: userByUsername.data
      })
    } catch (error) {
      console.log(error);
    }
  };
};

export function createUser(user) {
  return async function (dispatch) {
    try {
      let newUser = {
        last_name: user.family_name || "Doe",
        first_name: user.given_name || "John",
        username: user.nickname || `${user.given_name.charAt(0).toLowerCase()}${user.family_name.toLowerCase()}`,
        password: "1234",
        email: user.email,
        birth_date: "pendiente",
        nationality: "pendiente",
        id_number: 1234
      };
      const userCreated = await axios.post(`${REACT_ENV_BASE_URL}/users`, newUser);

      return dispatch({
        type: GET_USER_BY_EMAIL,
        payload: userCreated.data[0]
      });
    } catch (error) {
      console.log(error);
    }
  };
};


export function getUserByEmail(payload) {
  // return async function (dispatch) {
  //   try {
  //     return userCreated;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
}