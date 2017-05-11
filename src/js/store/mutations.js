import TYPES from './mutation-types.js'

const mutations = {}

mutations[TYPES.ADD_TASK] = (state, payload) => {
  state.tasks = state.tasks.concat(payload.task)
}

mutations[TYPES.SET_TASK] = (state, payload) => {
  state.tasks[payload.index] = payload.task
}

mutations[TYPES.REMOVE_COMPLETED_TASK] = (state) => {
  state.tasks = state.tasks.filter(task => !task.completed)
}

export default mutations