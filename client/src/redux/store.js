import { configureStore } from '@reduxjs/toolkit'
import authSlice from './authSlice';
import postsSlice from './postsSlice';
import categoriesSlice from './categoriesSlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        posts: postsSlice.reducer,
        cate: categoriesSlice.reducer
    },
})

export default store;