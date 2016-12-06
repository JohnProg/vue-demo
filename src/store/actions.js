export const increment = ({ commit }) => commit('increment');

export const decrement = ({ commit }) => commit('decrement');

export const addTodo = ({ commit }, todo) => commit('addTodo', todo);

export const deleteTodo = ({ commit }, { todo }) => commit('deleteTodo', {
  todo,
});

export const toggleTodo = ({ commit }, { todo }) => commit('toggleTodo', {
  todo,
});

export const clearCompleted = ({ commit }) => commit('clearCompleted');
