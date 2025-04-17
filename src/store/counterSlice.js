import { createSlice } from "@reduxjs/toolkit";
import { useReducer } from "react";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },

  reducers: {
    increment: (state) => {},
    decrement: (state) => {},
  },
});

// const reducers = (data)=>{

// };

// const {state, dispatch} = useReducer(reducers, initialState )
