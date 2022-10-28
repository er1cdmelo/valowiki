import { createSlice } from "@reduxjs/toolkit";

// export a slice that is a language changer
export const languageSlice = createSlice({
    name: "language", // <--- name of the slice
    initialState: {
        language: "en-US", // <--- initial state
    },
    reducers: {
        // <--- reducers
        setLanguage: (state, { payload }) => {
            state.language = payload;
        },
    },
});

// export the actions
export const { setLanguage } = languageSlice.actions; // <--- export the actions
// export the reducer
export default languageSlice.reducer; // <--- export the reducer
// export the selector
export const selectLanguage = (state) => state.language.language; // <--- export the selector

