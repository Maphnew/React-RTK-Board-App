import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import articleReducer from "../slices/articleSlice";
import saveInfoReducer from "../slices/saveInfoSlice";

export const store = configureStore({
    reducer: {
        articleList: articleReducer,
        saveInfo: saveInfoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
});
