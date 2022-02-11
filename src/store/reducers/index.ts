import { combineReducers } from "redux";
import mealsReducer from "./mealsReducer";

const reducers = combineReducers({
  meals: mealsReducer,
});

export default reducers;
