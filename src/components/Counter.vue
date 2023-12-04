<template>
  <h1>Counter App</h1>

  <div class="container">
    <div class="input-group mb-3">
      <button
          type="button"
          class="btn btn-outline-secondary"
          @click.stop.prevent="decrement"
      >-</button>
      <input
          type="text"
          class="form-control"
          :value="counter"
      >
      <button
          type="button"
          class="btn btn-outline-secondary"
          @click.stop.prevent="increment"
      >+</button>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  name: 'CounterApp',

  data() {
    return {

    }
  },

  computed: {
    ...mapState({
      counter: state => state.counter
    }),
  },

  methods: {
    ...mapMutations({
      add: 'increment',
      remove: 'decrement',
    }),

    increment() {
      this.$store.dispatch('counter', { type: 'increment', value: 5 })
    },
    decrement() {
      this.$store.dispatch('counter', { type: 'decrement', value: 5 })
    }
  }
}
</script>

<style scoped>

</style>
