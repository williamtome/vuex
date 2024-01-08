export default {
    namespaced: true,
    state: () => ({
        posts: [
            { id: 1, text: 'Hello' },
            { id: 2, text: 'Olá Mundo' },
        ],
    }),
    getters: {
        getPostById: state => id => state.posts.find(obj => obj.id === id),
    },
}
