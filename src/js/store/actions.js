import TYPES from './mutation-types'

export default {
  addTask({ commit }, task) {
    commit(TYPES.ADD_TASK, {
      task: task,
    })
  },
}
