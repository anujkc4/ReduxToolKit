import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    {
      id: 1,
      text: "helloWorld",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTod: (state, action) => {
      state.push({
        id: nanoid(),
        text: action.payload,
      });
    },
    remveTodo: () => {},
  },
});
