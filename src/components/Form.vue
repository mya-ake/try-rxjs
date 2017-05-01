<template>
  <div class="mt-5">
    <h3 class="headline">New task</h3>
    <form v-on:submit.prevent="submit">
      <v-text-field name="task" label="title" v-model="task"></v-text-field>
      <v-btn type="submit" primary dark>Add</v-btn>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'form-todo',
    data() {
      return {
        task: '',
      }
    },
    methods: {
      submit() {
        console.log('submit');
        console.log(this.task);
      },
    },
  }
</script>
