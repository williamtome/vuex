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
          :value="counting"
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
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: 'CounterApp',

  data() {
    return {

    }
  },

  computed: {
    ...mapState({
      counting: state => state.counter
    }),
  },

  methods: {
    ...mapMutations({
      add: 'increment',
      remove: 'decrement',
    }),

    ...mapActions(['counter']),

    increment() {
      this.counter({ type: 'increment', value: 5 })
    },
    decrement() {
      this.counter({ type: 'decrement', value: 5 })
    }
  }
}
</script>

<style scoped>

</style>
