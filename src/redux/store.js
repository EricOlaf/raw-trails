import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";

//IMPORT REDUCERS
import reviewReducer from "./ducks/reviewReducer";
import authReducer from "./ducks/reviewReducer";
import quizReducer from "./ducks/quizReducer";
import userReducer from "./ducks/userReducer";

export default createStore(
  combineReducers({
    reviewReducer,
    authReducer,
    quizReducer,
    userReducer
  }),
  applyMiddleware(promiseMiddleware())
);
