<template>
  <li>
    <div class="input-group">
      <span class="input-group-addon">
        <input type="checkbox" :checked="true">
      </span>
      <input type="text" class="form-control" value="aaa">
      <span class="input-group-btn">
        <Button text="x" @click="onDelete"></Button>
      </span>
    </div>
  </li>
</template>

<script>
import Button from './Button';
import CheckBox from './CheckBox';

export default {
  components: {
    Button,
    CheckBox,
  },
  methods: {
    onDelete() {
      console.log('delete');
    },
  }
};
</script>
