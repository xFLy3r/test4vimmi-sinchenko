<script lang="ts">
import { RouterView } from 'vue-router'
import GoBackBar from './components/GoBackBar.vue';

export default {
  data() {
    return {
      showBackBar: false,
    }
  },
  watch: {
    '$route': {
      handler: function(to: any, from: any) {
        this.showBackBar = !(to.fullPath === '/' || to.name === 'users');
      },
      immediate: true,
    }
  },
  components: { GoBackBar }
}
</script>

<template>
  <div class="app-wrapper">
    <div class="go-back-bar">
      <GoBackBar v-if="showBackBar"/>
    </div>
    <RouterView />
  </div>
</template>

<style lang="scss">

  body {
    background-color: aliceblue;
  }

  .app-wrapper {
    margin: 0 auto;
    max-width: 1024px;
    > * {
      width: 100%;
    }

    .go-back-bar {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
</style>
