<template>
  <div class="input-group">
    <span class="input-group-addon">
      <input type="checkbox" :checked="item.done" @change="onToggleTodo">
    </span>
    <input type="text" class="form-control" :value="item.text">
    <span class="input-group-btn">
      <btn text="x" @click="onDelete"></btn>
    </span>
  </div>
</template>

<script>
import btn from './commons/Button';

export default {
  name: 'Todo',
  components: {
    btn,
  },
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    onDelete() {
      this.$store.dispatch('deleteTodo', {
        todo: this.item,
      });
    },
    onToggleTodo() {
      this.$store.dispatch('toggleTodo', {
        todo: this.item,
      });
    },
  },
};
</script>
