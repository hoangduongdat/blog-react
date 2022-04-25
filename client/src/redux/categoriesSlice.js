import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    categories: [],
    loading: false
}
export const postsSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getCategories.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loading = false;
            })
    }
})

export const getCategories = createAsyncThunk('categories/getCategories', async () => {
    const categories = await axios({
        method: 'GET',
        url: "/categories",
    })
    return categories.data
});





export default postsSlice