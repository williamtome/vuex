import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore({
    state() {
        return {
            first_name: 'William',
            last_name: 'Tomé',
            email: 'william@teste.com'
        }
    },

    mutations() {
    }
})

createApp(App)
    .use(store)
    .mount('#app')

console.log(store)
