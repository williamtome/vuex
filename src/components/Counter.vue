<template>
  <h1>Counter App</h1>
  <p>{{ fullName }}</p>

  <h2>{{ getPostById(1) }}</h2>

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

  data() {
    return {

    }
  },

  created() {
    console.log(this.getPostById(1))
  },

  computed: {
    ...mapState({
      counting: state => state.counter
    }),

    ...mapGetters({
      getPostById: 'getPostById',
      fullName: 'fullName',
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
