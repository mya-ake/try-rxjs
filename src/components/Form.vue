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
  import * as Rx from 'rxjs-es'

  export default {
    name: 'form-todo',
    data() {
      return {
        newTask: '',
      }
    },
    methods: {
      submit() {
        Rx.Observable.of(this.newTask)
          .map((value) => {
            return value.trim()
          })
          .subscribe((value) => {
            this.$store.dispatch('addTask', Task.create({title: value}))
            this.newTask = ''
          })
      },
    },
  }
</script>
