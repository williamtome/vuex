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
      $_add: 'increment',
      $_remove: 'decrement',
    }),

    increment() {
      this.$_add(5)
    },
    decrement() {
      this.$_remove(5)
    }
  }
}
</script>

<style scoped>

</style>
