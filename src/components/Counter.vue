<template>
  <h1>Counter App</h1>
  <p>{{ fullName }}</p>

  <h2>Post escolhido: {{ getPostById(2) }}</h2>

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
import {mapActions, mapMutations, mapState, mapGetters} from "vuex";

export default {
  name: 'CounterApp',

  computed: {
    ...mapState({
      counting: state => state.counter.counter
    }),

    ...mapGetters({
      getPostById: 'posts/getPostById',
      fullName: 'customers/fullName',
    }),
  },

  methods: {
    ...mapMutations('counter', {
      add: 'increment',
      remove: 'decrement',
    }),

    ...mapActions('counter', ['counter']),

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
