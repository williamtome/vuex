export default {
    namespaced: true,
    state: () => ({
        counter: 0,
    }),
    getters: {},
    mutations: {
        increment(state, value) {
            state.counter += value
        },
        decrement(state, value) {
            if (state.counter > 0) {
                state.counter -= value
            }
        }
    },
    actions: {
        counter({ commit }, { type, value }) {
            commit(type, value)
        }
    },
}
