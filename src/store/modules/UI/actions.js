export default { 
    changeTheme(context, payload) {
        context.commit('changeTheme', payload)
        localStorage.setItem("dark", payload)
    }
}