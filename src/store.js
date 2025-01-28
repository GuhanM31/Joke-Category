import { configureStore } from "@reduxjs/toolkit";
import jokeslice from "./jokeslice";

const store = configureStore({
   reducer:{
    joke:jokeslice.reducer
   }
})

export default store