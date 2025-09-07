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
  reducers: { // untuk manipulasi state
    increment: (state, action: PayloadAction<number | undefined>) => {
      state.value += action.payload ?? 1;
    },
    decrement: (state, action: PayloadAction<number | undefined>) => {
      state.value -= action.payload ?? 1;
    },
  },
  selectors: { // untuk mengambil data state
    getDoubleCounter: (state: CounterState) => state.value * 2,
    getDynamicCounter: (state: CounterState, value: number) => {
      return state.value * value;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const { getDoubleCounter, getDynamicCounter } = counterSlice.selectors;

export default counterSlice.reducer;
