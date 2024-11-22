import { createSlice } from "@reduxjs/toolkit";

const addCart = createSlice({
  name: "cart",
  initialState: {
    iteamPass: [],  // Default state for the cart
  },
  reducers: {
    addData: (state, action) => {
      console.log("Reducer called with action:", action.payload); // Log the payload to check
      state.iteamPass.push(action.payload); // Push the item to the cart
    },
  },
});

export const { addData } = addCart.actions;
export default addCart.reducer;
