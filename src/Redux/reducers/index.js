import { combineReducers } from "redux";
import dataReducerPerform from "./dataOperation";
const rootReducer = combineReducers({
  dataReducerPerform: dataReducerPerform,
});
export default rootReducer;
