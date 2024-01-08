import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    strict: true,
    modules: {
        customers: {
            namespaced: true,
            state: () => ({
                first_name: 'Arya',
                last_name: 'Stark',
                email: 'arya@stark.com',
            }),
            getters: {
                fullName: state => `${state.first_name} ${state.last_name}`,
            },
            mutations: {},
            actions: {},
        },
        counter: {
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
        },
        posts: {
            namespaced: true,
            state: () => ({
                posts: [
                    { id: 1, text: 'Hello' },
                    { id: 2, text: 'Olá Mundo' },
                ],
            }),
            getters: {
                getPostById: state => id => state.posts.find(obj => obj.id === id),
            }
        }
    },
    state() {
        return {
            // users: [
            //     { id: 1, name: 'Fulano', age: 16 },
            //     { id: 2, name: 'Maria', age: 21 },
            //     { id: 3, name: 'Eduardo', age: 29 },
            // ],
        }
    },

    getters: {
        // getUserById: state => id => state.users.find(user => user.id === id),
    },

    mutations: {},

    actions: {},
})

createApp(App)
    .use(store)
    .mount('#app')
