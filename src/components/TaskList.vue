<template>
  <section class="mt-4 mb-4">
    <h3 class="headline">Task list</h3>
    <p v-show="$store.state.tasks.length === 0">No task.</p>
    <v-list two-line subheader>
      <v-list-item v-for="(task, index) in $store.state.tasks" v-bind:key="'task-' + index">
        <v-list-tile avatar>
          <v-list-tile-action>
            <v-checkbox v-bind:input-value="task.completed" v-on:change="toggleTaskCompleted(task, index)" success light />
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{task.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list-item>
    </v-list>
    <h4 class="title">Remove completed task.</h4>
    <v-btn type="button" error v-bind:disabled="activeRemoveBtn">Remove</v-btn>
  </section>
</template>

<script>
  export default {
    name: 'task-list',
    methods: {
      toggleTaskCompleted(task, index) {
        task.completed = !task.completed
        this.$store.dispatch('setTask', {
          index: index,
          task: task,
        })
      }
    },
    computed: {
      activeRemoveBtn() {
        return this.$store.state.tasks.filter(task => task.completed).length === 0
      },
    }
  }
</script>