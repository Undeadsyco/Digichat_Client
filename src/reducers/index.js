import { combineReducers } from "redux";
import userReducer from "./userReducers";
import otherReducer from "./reducer";

const reducer = combineReducers({
  user: userReducer,
  other: otherReducer
});

export default reducer;