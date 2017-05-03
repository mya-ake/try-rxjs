<template>
  <div class="mt-5">
    <h3 class="headline">New task</h3>
    <form v-on:submit.prevent="submit">
      <v-text-field name="task" label="title" v-model="newTask"></v-text-field>
      <v-btn type="submit" primary dark>Add</v-btn>
    </form>
  </div>
</template>

<script>
  import Task from './../js/models/Task'

  export default {
    name: 'form-todo',
    data() {
      return {
        newTask: '',
      }
    },
    methods: {
      submit() {
        console.log('submit')
        console.log(this.newTask)
        this.$store.dispatch('addTask', Task.create({title: this.newTask}))
        this.newTask = ''
      },
    },
  }
</script>
