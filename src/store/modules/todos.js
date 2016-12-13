// initial state
const state = {
  todos: [],
};

// getters
const getters = {
  todos: state => state.todos,
};

// actions
const actions = {
  addTodo: ({ commit }, { text }) => commit('addTodo', {
    text,
  }),

  deleteTodo: ({ commit }, { todo }) => commit('deleteTodo', {
    todo,
  }),

  toggleTodo: ({ commit }, { todo }) => commit('toggleTodo', {
    todo,
  }),

  clearCompleted: ({ commit }) => commit('clearCompleted'),
};

// mutations
const mutations = {
  addTodo: (state, { text }) => {
    state.todos.push({
      text,
      done: false,
    });
  },

  deleteTodo: (state, { todo }) => {
    state.todos.splice(state.todos.indexOf(todo), 1);
  },

  toggleTodo: (state, { todo }) => {
    todo.done = !todo.done;
  },

  clearCompleted: (state) => {
    state.todos = state.todos.filter(todo => !todo.done);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
