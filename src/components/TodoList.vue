<template>
  <section>
    <Panel title="Todo">
      <!-- add todo -->
      <div class="input-group">
        <input ref="newTodo" type="text" class="form-control" value=""
          autofocus
          placeholder="What needs to be done?"
          @keyup.enter="addTodo">
        <span class="input-group-btn">
          <Button text="Add" @click="addTodo"></Button>
        </span>
      </div>

      <!-- todo list -->
      <ul class="list-group">
        <li class="list-group-item" v-for="todo in filteredTodos">
          <todo :item="todo"></todo>
        </li>
      </ul>

      <!-- footer -->
      <template slot="footer">
        <span>
          <strong>{{ remaining }}</strong>
          {{ remaining | pluralize('item') }} left
        </span>
        <ul class="filters"></ul>
        <Button text="Clear completed"
          @click="clearCompleted"
          :visible="todos.length > remaining">
        </Button>
      </template>
    </Panel>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import Todo from './Todo';
import Panel from './Panel';
import Button from './Button';

const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done),
};

export default {
  components: {
    Todo,
    Panel,
    Button,
  },
  data() {
    return {
      visibility: 'all',
      filters,
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    filteredTodos() {
      return filters[this.visibility](this.todos);
    },
    remaining() {
      return this.todos.filter(todo => !todo.done).length;
    },
  },
  methods: {
    addTodo() {
      const input = this.$refs.newTodo;
      const text = input.value;
      if (text.trim()) {
        this.$store.dispatch('addTodo', { text });
      }

      input.value = '';
    },
    ...mapActions([
      'clearCompleted',
    ]),
  },
  filters: {
    pluralize(num, word) {
      return num === 1 ? word : `${word}s`;
    },
  },
};
</script>
