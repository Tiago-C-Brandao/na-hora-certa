export default {
    getUsers() {
        return this.$axios.$get('users');
    },
    addUser(context, data) {
        return this.$axios.$post('users', data)
    }
}