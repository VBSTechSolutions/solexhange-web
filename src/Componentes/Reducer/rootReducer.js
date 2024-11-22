import { combineReducers } from "@reduxjs/toolkit";
import addCart from "../Reducer"; // Ensure this path is correct

const rootReducer = combineReducers({
  cart: addCart,  // cart is the state slice where the cart data is stored
});

export default rootReducer;
