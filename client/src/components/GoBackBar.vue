<script lang="ts">

export default {
  methods: {
    goBack() {
      this.$router.back();
    }
  }
}
</script>

<template>
  <div class="go-back-bar">
    <v-icon icon="mdi-arrow-left-thick" size="small" @click="goBack"></v-icon>
  </div>
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
