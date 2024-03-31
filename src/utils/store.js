import { configureStore } from '@reduxjs/toolkit';
import appslice from './appslice';

const Mystore = configureStore({
    reducer: {
        app:appslice,
    }
})

export default Mystore