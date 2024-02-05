import { createSlice } from "@reduxjs/toolkit";

const idSlice = createSlice({
  name: "id",
  initialState:null,
  reducers: {
    
    addId:(state, action)=>{
       return action.payload;
    },
    removeId:(state, action)=>{
        return null;
     },
  },
});

export const { addId, removeId } = idSlice.actions;

export default idSlice.reducer;