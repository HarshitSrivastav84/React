import {configureStore} from "@reduxjs/toolkit";
import itemSlice from "./itemsSlice";
import fetchStatusSlice from "./fetchStatusSlice";

const vastraaStore = configureStore({
    reducer: {
        items: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer, 
        bag: bagSlice.reducer,
    }
});

export default vastraaStore;