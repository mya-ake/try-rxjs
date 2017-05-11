class Task {
  constructor({ title, completed }) {
    this.title = title
    this.completed = completed
  }

  static create({title}) {
    return new Task({
      title: title,
      completed: false,
    })
  }
}

export default Task