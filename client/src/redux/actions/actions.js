import axios from "axios";

export const SIGN_IN = "LOGIN_USER";
export const SIGN_OUT = "SIGN_OUT";
export const REGISTER_USER = "REGISTER_USER";
export const GET_ALL_USERS = "GET_ALL_USERS";

export const CREATE_POST = "CREATE_POST";
export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const GET_POST = "GET_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_LIKES = "UPDATE_LIKES";
export const UPDATE_DISLIKES = "UPDATE_DISLIKES";
export const SET_MESSAGE = "SET_MESSAGE";
const url = process.env.REACT_APP_BASE_URL;

export function loginUser({ email, password }) {
  const obj = {
    email,
    password,
  };
  return async (dispatch) => {
    try {
      const json = await axios.post(`${url}/users/login`, obj);
      return dispatch({
        type: SIGN_IN,
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: SIGN_IN,
        payload: {
          message: error.message,
          data: {}
        },
      });
    }
  };
}

export function registerUser(obj) {
    return async (dispatch) => {
      try {
        const json = await axios.post(`${url}/users/sing-up`, obj);
        return dispatch({
          type: REGISTER_USER,
          payload: json.data,
        });
      } catch (error) {
        return Promise.reject(error);
      }
    };
}

export function allUsers() {
    return async (dispatch) => {
      try {
        const json = await axios.get(`${url}/users/search-all-users`);
        return dispatch({
          type: REGISTER_USER,
          payload: json.data,
        });
      } catch (error) {
        return Promise.reject(error);
      }
    };
}


export function createPost(obj) {
    return async (dispatch) => {
      try {
        const json = await axios.post(`${url}/posts/create-post`, obj);
        return dispatch({
          type: CREATE_POST,
          payload: json.data,
        });
      } catch (error) {
        return Promise.reject(error);
      }
    };
}

export function getPostById(id) {
    return async (dispatch) => {
      try {
        const json = await axios.get(`${url}/posts/search-one-post/${id}`);
        return dispatch({
          type: GET_POST,
          payload: json.data,
        });
      } catch (error) {
        return Promise.reject(error);
      }
    };
}

export function getAllPost() {
    return async (dispatch) => {
      try {
        const json = await axios.get(`${url}/posts/search-all-post`);
        return dispatch({
          type: GET_ALL_POSTS,
          payload: json.data,
        });
      } catch (error) {
        return Promise.reject(error);
      }
    };
}

export function deletePost(id) {
    return async (dispatch) => {
      try {
        const json = await axios.delete(`${url}/posts/delete-post/${id}`);
        return dispatch({
          type: DELETE_POST,
          payload: json.data,
        });
      } catch (error) {
        return Promise.reject(error);
      }
    };
}

export function updateLikes(id) {
    return async (dispatch) => {
      try {
        const json = await axios.get(`${url}/posts/update-like/${id}`);
        return dispatch({
          type: UPDATE_LIKES,
          payload: json.data,
        });
      } catch (error) {
        return Promise.reject(error);
      }
    };
}

export function updateDislikes(id) {
    return async (dispatch) => {
      try {
        const json = await axios.get(`${url}/posts/update-dislike/${id}`);
        return dispatch({
          type: UPDATE_DISLIKES,
          payload: json.data,
        });
      } catch (error) {
        return Promise.reject(error);
      }
    };
}

export function setMessage() {
  return async (dispatch) => {
    dispatch({
      type: SET_MESSAGE,
    });
  };
}

export function signOut() {
    return async (dispatch) => {
      dispatch({
        type: SIGN_OUT,
      });
    };
}