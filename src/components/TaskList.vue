<template>
  <v-list two-line subheader>
    <v-list-item v-for="(task, index) in $store.state.tasks" v-bind:key="'task-' + index">
      <v-list-tile avatar>
        <v-list-tile-action>
          <v-checkbox v-bind:input-value="task.done" v-on:change="updateDone(task, index)" success light />
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{task.title}}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list-item>
  </v-list>
</template>

<script>
  export default {
    name: 'task-list',
    methods: {
      updateDone(task, index) {
        task.done = !task.done
        this.$store.dispatch('setTask', {
          index: index,
          task: task,
        })
      }
    },
  }
</script>