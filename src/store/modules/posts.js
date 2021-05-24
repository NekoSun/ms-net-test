import {
  postsGet,
  postUpdate
} from '@/routs'

export default {
  namespaced: true,
  actions: {
    async GET({ commit }) {
      try {
        const response = await postsGet()
        console.log('🐹 posts/GET', response)
        commit('GET', response.data)
      } catch (e) {
        console.error(e)
        commit('GET', 'error')
        throw e
      }
    },
    async UPDATE({ commit }, payload) {
      try {
        const response = await postUpdate(payload)
        console.log('🐹 posts/UPDATE', response)
      } catch (e) {
        commit('GET', 'error')
        throw (e)
      }
    },
  },
  mutations: {
    GET(state, payload) {
      state.data = payload
    },
  },
  state: {
    data: [],
  }
}
