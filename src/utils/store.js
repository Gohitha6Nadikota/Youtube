import { configureStore } from '@reduxjs/toolkit';
import appslice from './appslice';
import searchSlice from './searchSlice';
import chatSlice from './chatSlice';
import modeSlice from './modeSlice';
import videoSlice from './videoSlice';
import searchKeySlice from './searchKeySlice';
const Mystore = configureStore({
    reducer: {
        app: appslice,
        search: searchSlice,
        chat: chatSlice,
        mode: modeSlice,
        videos: videoSlice,
        searchKey:searchKeySlice
    }
})

export default Mystore