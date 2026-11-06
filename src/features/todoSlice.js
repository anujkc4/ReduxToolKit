import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
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
    addTod0: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
      });
    },
    remveTodo: (sate, action) => {
      sate.todos = sate.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, remveTodo } = todoSlice.actions;
export default todoSlice.reducer;
