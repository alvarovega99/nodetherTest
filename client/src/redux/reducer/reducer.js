import {
  SIGN_OUT,
  SIGN_IN,
  REGISTER_USER,
  GET_ALL_USERS,
  CREATE_POST,
  GET_ALL_POSTS,
  GET_POST,
  DELETE_POST,
  UPDATE_LIKES,
  UPDATE_DISLIKES,
  SET_MESSAGE
} from "../actions/actions";

const initialState = {
  userLogued: {},
  users: [],
  allPosts: [],
  post: {},
  message: "",
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN:
      return {
        ...state,
        userLogued: payload.data,
        message: payload.message,
      };
    case SIGN_OUT:
      return {
        ...state,
        userLogued: {},
      };
    case REGISTER_USER:
      return {
        ...state,
        users: payload.data,
        message: payload.message,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload.data,
        message: payload.message,
      };
    case CREATE_POST:
      return {
        ...state,
        message: payload.message,
      };
    case GET_ALL_POSTS:
      return {
        ...state,
        allPosts: payload.data,
        message: payload.message,
      };
    case GET_POST:
      return {
        ...state,
        post: payload.data,
        message: payload.message,
      };
    case DELETE_POST:
      return {
        ...state,
        message: payload.message,
      };
    case UPDATE_LIKES:
      return {
        ...state,
        message: payload.message,
      };
    case UPDATE_DISLIKES:
      return {
        ...state,
        message: payload.message,
      };
    case SET_MESSAGE:
      return {
        ...state,
        message: "",
      };
    default:
      return state;
  }
};
