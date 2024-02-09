import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../constants/normalized-mocks";

export const dishSlice = createSlice({
  name: "dish",
  initialState: {
    entities: normalizedDishes.reduce((acc, dish) => {
      acc[dish.id] = dish;

      return acc;
    }, {}),
    ids: normalizedDishes.map(({ id }) => {
      id;
    }),
  },
  reducers: {},
});
