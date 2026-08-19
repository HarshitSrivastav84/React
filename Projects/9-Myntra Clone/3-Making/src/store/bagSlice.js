import { createSlice } from "@reduxjs/toolkit";
import {DEFAULT_ITEMS} from "../data/items";

const bagSlice = createSlice({
    name: 'bag',
    initialState: DEFAULT_ITEMS,
    reducers: {
        addInitialItems: (store, action) => {
            return store;
        }
    }
});

export const bagActions = bagSlice.actions;

export default bagSlice;

