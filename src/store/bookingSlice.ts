import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Car } from "@/types/car";

interface BookingState {
  car: Car | null;
}

const initialState: BookingState = {
  car: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setCar(state, action: PayloadAction<Car>) {
      state.car = action.payload;
    },
    clearBooking(state) {
      state.car = null;
    },
  },
});

export const { setCar, clearBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
