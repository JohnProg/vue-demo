<template>
  <div class="input-group">
    <span class="input-group-addon">
      <input type="checkbox" :checked="item.done" @change="onToggleTodo">
    </span>
    <input type="text" class="form-control" :value="item.text">
    <span class="input-group-btn">
      <Button text="x" @click="onDelete"></Button>
    </span>
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'Todo',
  components: {
    Button,
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
