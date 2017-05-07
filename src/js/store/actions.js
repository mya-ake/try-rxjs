import TYPES from './mutation-types'

export default {
  addTask({ commit }, task) {
    commit(TYPES.ADD_TASK, {
      task: task,
    })
  },
  setTask({ commit }, data) {
    commit(TYPES.SET_TASK, {
      index: data.index,
      task: data.task,
    })
  },
}
