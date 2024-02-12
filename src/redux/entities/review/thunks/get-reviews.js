import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRewiesIds } from "../selectors";

export const getReviews = createAsyncThunk(
  "reviews/getReviews",
  async () => {
    const response = await fetch("http://localhost:3001/api/reviews");
    const result = await response.json();
    return result;
  },
  { condition: (_, { getState }) => !selectRewiesIds(getState())?.length }
);
