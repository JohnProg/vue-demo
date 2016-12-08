<template>
  <Panel title="Counter">
    <p>Count: {{ value }}</p>
    <std-button text="+" @click="increment" />
    <std-button text="-" @click="decrement" />
  </Panel>
</template>

<script>
import { mapActions } from 'vuex';
import Panel from './commons/Panel';
import Button from './commons/Button';

export default {
  components: {
    Panel,
    StdButton: Button,
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
