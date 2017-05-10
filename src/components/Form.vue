<template>
  <section class="mt-5">
    <h3 class="headline">New task</h3>
    <form v-on:submit.prevent="submit">
      <v-text-field name="task" label="title" v-model="newTask" v-bind:rules="newTaskErrors"></v-text-field>
      <v-btn type="submit" primary dark>Add</v-btn>
    </form>
  </section>
</template>

<script>
  import Task from './../js/models/Task'
  import FormException from './../js/exceptions/FormException'
  import {isEmptyString} from './../js/lib/validations'
  import {Observable} from './../js/rx/Observable'

  const throwWhenEmpty = (testValue) => {
    if (isEmptyString(testValue)) {
      throw new FormException({
        message: 'Empty'
      })
    }
  }

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
        Observable.of(this.newTask)
          .do(() => {
            // エラー初期化
            this.newTaskErrors = []
          })
          .map((value) => value.trim())  // トリム
          .do(throwWhenEmpty)  // 空チェック
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
