export default {
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
}
