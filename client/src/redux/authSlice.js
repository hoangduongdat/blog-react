import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
    register: false,
    islogin: ""
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state, action) => {
            localStorage.removeItem('user')
            state.user = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.rejected, (state, action) => {
                state.islogin = "vui lòng nhập đúng thông tin"
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload
                state.islogin = ""
            })

            .addCase(register.fulfilled, (state, action) => {
                const { password, ...others } = action.payload
                state.user = others;
                state.register = true
            })
    }
})

export const login = createAsyncThunk('auth/login', async (user) => {
    const userdata = await axios({
        method: 'POST',
        url: "/auth/login",
        data: user

    })
    return userdata.data

});

export const register = createAsyncThunk('auth/register', async (user) => {
    const userdata = await axios({
        method: 'POST',
        url: "/auth/register",
        data: user

    })
    return userdata.data
});




export default authSlice