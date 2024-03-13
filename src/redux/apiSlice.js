import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    entries: {
        isLoading: false,
        error: false,
    }
}

export const apiFetch = createAsyncThunk('apiFetch',
    async () => {
    const response = await fetch('https://api.publicapis.org/entries')
    return response.json()
    })

export const apiSlice = createSlice({
    name: 'api',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(apiFetch.pending, (state) => {
            state.entries.isLoading = true,
            state.entries.error = false
        })
        builder.addCase(apiFetch.fulfilled, (state,action) => {
            state.entries = action.payload
            state.entries.isLoading = false,
            state.entries.error = false
        })
        builder.addCase(apiFetch.rejected, (state,action) => {
            console.log('Error',action.payload)
            state.entries.error = true
        })
    }

})

export default apiSlice.reducer