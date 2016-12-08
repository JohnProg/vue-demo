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
          <std-button text="Add" @click="addTodo" />
        </span>
      </div>

      <!-- todo list -->
      <ul class="list-group">
        <li class="list-group-item" v-for="todo in filteredTodos">
          <todo :item="todo" />
        </li>
      </ul>

      <!-- footer -->
      <template slot="footer">
        <span>
          <strong>{{ remaining }}</strong>
          {{ remaining | pluralize('item') }} left
        </span>
        <breadcrumb :items="filters" :initialSelectedKey="visibility"
          @select="onSelectFilter" />
        <std-button text="Clear completed"
          @click="clearCompleted"
          :visible="todos.length > remaining" />
      </template>
    </Panel>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Todo from './Todo';
import Panel from './commons/Panel';
import Button from './commons/Button';
import Breadcrumb from './commons/Breadcrumb';

// filter todo list functions
const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done),
};

export default {
  components: {
    Todo,
    Panel,
    StdButton: Button,
    Breadcrumb,
  },
  data() {
    return {
      visibility: 'all',
      filters: Object.keys(filters).map(key => ({
        key,
        text: key,
      })),
    };
  },
  computed: {
    ...mapGetters([
      'todos',
    ]),
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
        // TODO: callback
        this.$store.dispatch('addTodo', { text });
      }

      input.value = '';
    },
    onSelectFilter(params) {
      this.visibility = params.selectedKey;
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
