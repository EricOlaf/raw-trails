import axios from "axios";

const GET_USER = "GET_USER";

const initialState = {
  isAdmin: ""
};

export const getUser = () => {
  return {
    type: GET_USER,
    payload: axios.get("/api/useradmin")
  };
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return { ...state };
    case `${GET_USER}_FULFILLED`:
      return { ...state, isAdmin: action.payload.data[0].is_admin };
    case `${GET_USER}_REJECTED`:
      return { ...state };
    default:
      return state;
  }
}
