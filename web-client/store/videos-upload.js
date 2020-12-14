const initState = () => ({
  videoUploadPromise: null,
  active: false,
  type: "",
  step: 1
})

export const state = initState

export const mutations = {
  toggleActivity(state) {
    state.active = !state.active
    if(!state.active){
      Object.assign(state, initState())
    }
  },
  setType(state, {type}) {
    state.type = type
    state.step++
  },
  setVideo(state, {videoUploadPromise}) {
    state.videoUploadPromise = videoUploadPromise
    state.step++
  },
  reset(state) {
    Object.assign(state, initState())
  }
}

export const actions = {
  startVideoUpload({commit, dispatch}, {form}){
    const videoUploadPromise = this.$axios.$post("/api/videos", form);
    commit("setVideo", {videoUploadPromise});
  },
  async createTrick({commit, dispatch}, {trick}){
    await this.$axios.$post("/api/tricks", trick)
    await dispatch('tricks/fetchTricks')
  }
}
