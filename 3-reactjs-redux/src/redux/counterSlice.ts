import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number | undefined>) => {
      state.value += action.payload ?? 1;
    },
    decrement: (state, action: PayloadAction<number | undefined>) => {
      state.value -= action.payload ?? 1;
    },
  },
  selectors: {
    getDoubleCounter: (state: CounterState) => state.value * 2,
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { getDoubleCounter } = counterSlice.selectors;

export default counterSlice.reducer;
