import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'




const initialState = {
    user: null
}


export const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload
        })
    }
})

export const login = createAsyncThunk('auth/login', async (user) => {
    console.log(user)
    const userdata = await axios.post("api/auth/login", {
        method: 'post',
        data: user
    })

    console.log(userdata)

    return userdata


    // const res = await fetch('/api/todos');
    // const data = await res.json();
    // return data.todos;
});


export default authSlice