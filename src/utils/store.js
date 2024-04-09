import { configureStore } from '@reduxjs/toolkit';
import appslice from './appslice';
import searchSlice from './searchSlice';
import chatSlice from './chatSlice';
import modeSlice from './modeSlice';

const Mystore = configureStore({
    reducer: {
        app: appslice,
        search: searchSlice,
        chat: chatSlice,
        mode:modeSlice,
    }
})

export default Mystore