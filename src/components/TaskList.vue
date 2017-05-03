<template>
  <v-list two-line subheader>
    <v-list-item v-for="(task, index) in $store.state.tasks" v-bind:key="'task-' + index">
      <v-list-tile avatar>
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
  }
</script>