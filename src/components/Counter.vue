<template>
  <h1>Counter App</h1>

  <div class="container">
    <div class="input-group mb-3">
      <button
          type="button"
          class="btn btn-outline-secondary"
          @click.stop.prevent="remove(1)"
      >-</button>
      <input
          type="text"
          class="form-control"
          :value="counter"
      >
      <button
          type="button"
          class="btn btn-outline-secondary"
          @click.stop.prevent="add(1)"
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

    // increment() {
    //   this.$store.commit('increment', 10)
    // },
    // decrement() {
    //   this.$store.commit('decrement', 10)
    // }
  }
}
</script>

<style scoped>

</style>
