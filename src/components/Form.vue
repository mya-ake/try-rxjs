<template>
  <div class="mt-5">
    <h3 class="headline">New task</h3>
    <form v-on:submit.prevent="submit">
      <v-text-field name="task" label="title" v-model="newTask" v-bind:rules="newTaskErrors"></v-text-field>
      <v-btn type="submit" primary dark>Add</v-btn>
    </form>
  </div>
</template>

<script>
  import Task from './../js/models/Task'
  import FormException from './../js/exceptions/FormException'
  import * as Rx from 'rxjs-es'

  export default {
    name: 'form-todo',
    data() {
      return {
        newTask: '',
        newTaskErrors: [],
      }
    },
    methods: {
      submit() {
        Rx.Observable.of(this.newTask)
          .do(() => {
            // エラー初期化
            this.newTaskErrors = []
          })
          .map((value) => {
            // トリム
            return value.trim()
          })
          .do(
            // バリデーション
            (value) => {
              if (value === '') {
                throw new FormException({
                  message: 'Empty'
                })
              }
            }
          )
          .subscribe(
            (value) => {
              this.$store.dispatch('addTask', Task.create({title: value}))
              this.newTask = ''
            },
            (error) => {
              this.newTaskErrors.push(error.message)
            }
          )
      },
    },
  }
</script>
