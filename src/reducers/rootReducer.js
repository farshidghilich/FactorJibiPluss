import { combineReducers } from "redux";
import { getCustomersList } from "./Reducer";
// import { testReducer } from "./Main.Reducer";
import settings from "./settings";
export default combineReducers({
  settings,
  // list: testReducer,
  customers: getCustomersList,
});
