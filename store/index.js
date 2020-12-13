export const state = () => ({
  gallery: [],
})

export const mutations = {
  setCareers: (state, list) => (state.gallery = list),
}

export const actions = {
  async nuxtServerInit({ commit }, { $content }) {
    const gallery = await $content('Gallery').fetch()

    await commit('setGallery', careers)
  },
}
