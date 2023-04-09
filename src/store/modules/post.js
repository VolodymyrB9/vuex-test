export default {
  state: {
    posts: []
  },
  getters: {
    allPosts(state) {
      return state.posts
    },
    postsCount(state, getters) {
      return getters.validPosts.length
    },
    validPosts(state) {
      return state.posts.filter( p=> {
        return p.title && p.body
      })
    }
  },
  mutations: {
    updatePosts(state, posts) {
      state.posts = posts
    },
    createPost(state, newPost) {
      state.posts.unshift(newPost)
    }

  },
  actions: {
    async fetchPosts(ctx, limit=3 ) {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=" + limit
    )
    const posts = await res.json()
    ctx.commit('updatePosts', posts)

  }
    },
  modules: {
  }
}