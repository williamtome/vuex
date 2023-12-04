import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            first_name: 'William',
            last_name: 'Tomé',
            email: 'william@teste.com',
            counter: 0,
        }
    },

    mutations: {
        increment(state, value) {
            state.counter += value
        },
        decrement(state, value) {
            if (state.counter > 0) {
                state.counter -= value
            }
        }
    }
})

createApp(App)
    .use(store)
    .mount('#app')
