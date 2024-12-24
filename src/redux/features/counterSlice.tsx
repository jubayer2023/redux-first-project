import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type CounterType = {
  count: number;
};

const initialState: CounterType = { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByPayload: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
    decrementByPayload: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, decrement, incrementByPayload, decrementByPayload } =
  counterSlice.actions;
export default counterSlice.reducer;
