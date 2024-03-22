import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 10000,
};

const bankSlice = createSlice({
  name: "bankSlice",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
  },
});

export const { deposit, withdraw } = bankSlice.actions;

export default bankSlice.reducer;
