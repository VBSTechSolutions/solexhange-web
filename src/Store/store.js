import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../Componentes/Reducer/reducer"; // Correct path to your rootReducer

const store = configureStore({
  reducer: rootReducer,  // Make sure this is correctly pointing to the rootReducer
});

export default store;
