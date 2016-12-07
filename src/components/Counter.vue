<template>
  <Panel title="Counter">
    <p>Count: {{ value }}</p>
    <Button text="+" @click="increment"></Button>
    <Button text="-" @click="decrement"></Button>
  </Panel>
</template>

<script>
import { mapActions } from 'vuex';
import Panel from './Panel';
import Button from './Button';

export default {
  components: {
    Panel,
    Button,
  },
  props: {
    value: {
      type: Number,
      default: 0,
    },
  },
  methods: mapActions([
    'increment',
    'decrement',
  ]),
};
</script>
