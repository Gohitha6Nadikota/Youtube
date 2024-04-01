import { configureStore } from '@reduxjs/toolkit';
import appslice from './appslice';
import searchSlice from './searchSlice';

const Mystore = configureStore({
    reducer: {
        app: appslice,
        search:searchSlice,
    }
})

export default Mystore