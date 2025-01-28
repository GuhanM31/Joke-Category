import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchjoke = createAsyncThunk("jokes/jokecategory", async (category) => {
  try {
    const result = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    console.log(result.data.value);
    return result.data.value;
  } catch (error) {
    console.error("Error fetching joke:", error);
    throw new Error("Invalid category or API error");
  }
});

const initialState = {
  joke: "No joke !",
};

const jokeslice = createSlice({
  name: "joke",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build
      .addCase(fetchjoke.pending, () => {
        console.log("Loading...");
      })
      .addCase(fetchjoke.fulfilled, (state, action) => {
        state.joke = action.payload;
      })
      .addCase(fetchjoke.rejected, (state) => {
        state.joke = `Invalid category! Please use one of the following: 
        "animal", "career", "celebrity", "dev", "explicit", "fashion", "food", 
        "history", "money", "movie", "music", "political", "religion", 
        "science", "sport", "travel".`;
      });
  },
});

export default jokeslice;
export { fetchjoke };
