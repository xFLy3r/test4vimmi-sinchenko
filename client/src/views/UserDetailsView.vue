<script lang="ts">
import InternalServerError from '@/components/InternalServerError.vue';
import UserDetails from '@/components/UserDetails.vue';
import UserService from '@/services/UserService';

export default {
  data() {
    return {
      user: null,
      isLoading: false,
    };
  },
  beforeMount() {
    const { id } = this.$route.params;
 
    this.isLoading = true;
    UserService.getById(Number(id)).then(({ user }) => {
      this.user = user;
    }).catch(err => {
      if (err?.response.status === 404) {
        this.$router.push({ 
          name: 'not-found',   
          query: this.$route.query,
          hash: this.$route.hash, 
        });
      } 
      return err;
    }).finally(() => { this.isLoading = false });
  },
  components: { UserDetails, InternalServerError }
}
</script>

<template>
  <div class="user-details-view">
    <v-overlay :model-value="isLoading" class="align-center justify-center">
      <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <InternalServerError v-if="!user && !isLoading"/>
    <UserDetails v-if="user" :user="user"/>
  </div>
</template>

<style scoped lang="scss">
  .user-details-view {
    margin-top: 2rem;
    position: relative;
    height: 50vh;
  }
   
</style>