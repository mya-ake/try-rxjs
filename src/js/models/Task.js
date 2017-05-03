class Task {
  constructor({ title, done }) {
    this.title = title
    this.done = done
  }

  static create({title}) {
    return new Task({
      title: title,
      done: false,
    })
  }
}

export default Task