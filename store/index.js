export const state = () => ({
  gallery: {},
})

export const mutations = {
  setGallery: (state, list) => (state.gallery = list),
}

export const actions = {
  async nuxtServerInit({ commit }){
    let gallery = await require.context(
      "~/assets/content/gallery/",
      false,
      /\.json$/
    );

    await commit('setGallery', gallery)
  },
}
