import TYPES from './mutation-types.js'

const mutations = {};

mutations[TYPES.ADD_TASK] = (state, payload) => {
  state.tasks = state.tasks.concat(payload.task)
}

export default mutations