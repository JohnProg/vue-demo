export const increment = (state) => {
  state.count += 1;
};

export const decrement = (state) => {
  state.count -= 1;
};

export const addTodo = (state, { text }) => {
  state.todos.push({
    text,
    done: false,
  });
};

export const deleteTodo = (state, { todo }) => {
  state.todos.splice(state.todos.indexOf(todo), 1);
};

export const toggleTodo = (state, { todo }) => {
  todo.done = !todo.done;
};

export const clearCompleted = (state) => {
  state.todos = state.todos.filter(todo => !todo.done);
};
