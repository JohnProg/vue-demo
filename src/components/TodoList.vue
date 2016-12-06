<template>
  <section>
    <Panel title="Todo">
      <ul class="list-group">
        <todo></todo>
      </ul>
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
import { mapGetters, mapActions } from 'vuex';
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
      return []; //this.$store.state.todos;
    },
    remaining() {
      return this.todos.filter(todo => !todo.done).length;
    },
  },
  methods: {
    clearCompleted() {

    },
  },
  filters: {
    pluralize: (num, word) => num === 1 ? word : `${word}s`,
  },
};
</script>
