import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  showModal: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setShowModal: (state, action) => {
      state.showModal = action.payload
    }
  }
})



export const { setLoading, setShowModal } = uiSlice.actions

export default uiSlice.reducer