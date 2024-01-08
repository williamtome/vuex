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
            posts: [
                { id: 1, text: 'Hello' },
                { id: 2, text: 'Olá Mundo' },
            ],
            users: [
                { id: 1, name: 'Fulano', age: 16 },
                { id: 2, name: 'Maria', age: 21 },
                { id: 3, name: 'Eduardo', age: 29 },
            ],
        }
    },

    getters: {
        fullName: state => `${state.first_name} ${state.last_name}`,
        getPostById: state => id => state.posts.find(obj => obj.id === id),
        getUserById: state => id => state.users.find(user => user.id === id),
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
    },

    actions: {
       counter({ commit }, { type, value }) {
           commit(type, value)
       }
    },
})

createApp(App)
    .use(store)
    .mount('#app')
