import { combineReducers } from "redux";
import{addCart} from "../Reducer/"

const rootReducer = combineReducers({
  cart: addCart ,
});

export default rootReducer;