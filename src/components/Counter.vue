<template>
  <Panel title="Counter">
    <p>Count: {{ $store.state.count }}</p>
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
  methods: mapActions([
    'increment',
    'decrement',
  ]),
};
</script>
