<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        <span>Try RxJS with Vue.js and Vuetify.js</span>
      </v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container>
          <my-header></my-header>

          <form-todo></form-todo>

        </v-container>
      </v-content>
    </main>
    <v-footer>
      <span>&copy; 2017 mya-ake</span>
    </v-footer>
  </v-app>
</template>

<script>
  import Header from './Header.vue'
  import Form from './Form.vue'

  export default {
    components: {
      'my-header': Header,
      'form-todo': Form,
    },
  }
</script>

<style lang="stylus">
  @import './../../node_modules/vuetify/src/stylus/main'

  #app {
    display: flex;
    flex-direction: column;
  }
  .container {
    max-width: 100%;
    padding: 0 1rem;
  }
</style>