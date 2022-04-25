import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    listPost: [],
    loading: {
        posts: false,
        postsDetail: false
    },
    postDetail: {}
}
export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getPosts.pending, (state, action) => {
                state.loading.posts = true;
            })
            .addCase(getPosts.fulfilled, (state, action) => {
                state.listPost = action.payload;
                state.loading.posts = false;
            })
            .addCase(getPostDetail.pending, (state, action) => {
                state.loading.postsDetail = true;
            })
            .addCase(getPostDetail.fulfilled, (state, action) => {
                state.postDetail = action.payload;
                state.loading.postsDetail = false;
            })
    }
})

export const getPosts = createAsyncThunk('posts/getPosts', async (search) => {
    let posts
    console.log(search)
    if (search) {
        posts = await axios({
            method: 'GET',
            url: `/posts/${search}`,
        })
    } else {
        posts = await axios({
            method: 'GET',
            url: `/posts`,
        })
    }
    return posts.data
});
export const getPostDetail = createAsyncThunk('posts/getPostDetail', async (postId) => {

    const postDetail = await axios({
        method: 'GET',
        url: `/posts/${postId}`,
    })
    return postDetail.data
});






export default postsSlice