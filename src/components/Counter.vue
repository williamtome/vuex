<template>
  <h1>Counter App</h1>
  <p>{{ fullName }}</p>

  <h2>Post escolhido: {{ getPostById(1) }}</h2>

  <ul>
    <li
        v-for="user in $store.state.users"
        :key="user.id"
    >
      {{ user.name }}
    </li>
  </ul>

  <h3>Usuário Escolhido: {{ getUserById(2).name }}</h3>

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
      getUserById: 'getUserById',
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
