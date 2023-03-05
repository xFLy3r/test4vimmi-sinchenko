<script lang="ts">

export default {
  props: {
    message: {
      type: String,
      default: 'Something went wrong...'
    }
  },
}
</script>

<template>
  <v-alert
    type="error"
    title="Internal Server Error"
  >
    {{ message }}
  </v-alert>
</template>

<style scoped>
</style>
