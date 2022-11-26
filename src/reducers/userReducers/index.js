import { combineReducers } from "redux";

import actionsReducer from './userActionsReducer';

const userReducer = combineReducers({
  actions: actionsReducer,
});

export default userReducer;