<script lang="ts">

export default {
  methods: {
    goBack() {
      this.$router.push('users');
    }
  }
}
</script>

<template>
  <v-alert
    type="warning"
    title="Not Found"
  >
    <div>
      Seems like you are trying to find unknown resource. 
      Click  <router-link :to="{ name: 'users'  }">here</router-link> to proceed with home page. 
    </div>
  </v-alert>
</template>

<style scoped>
  .go-back-bar {
    background-color: white;
    width: 100%;
    padding: 0.5rem;
    box-shadow: 0px 2px 1px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 1px 1px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 3px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.12));
    border-radius: 4px;
  }
</style>
