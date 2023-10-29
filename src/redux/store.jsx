import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './slice';

const Store = configureStore({
    reducer: counterSlice,
})

export default Store;