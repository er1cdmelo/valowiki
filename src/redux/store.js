import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./langSlice"; // <--- import the language slice

export default configureStore({
    reducer: {
        language: languageSlice, // <--- add the language slice to the store
    },
});
