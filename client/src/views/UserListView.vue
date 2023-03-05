<script lang="ts">
import InternalServerError from '@/components/InternalServerError.vue';
import UserListItem from '@/components/UserListItem.vue';
import UserService from '@/services/UserService';

export default {
  data() {
    return {
      users: null,
      isLoading: false,
    };
  },
  methods: {
    onSelectUser(id: number) {
      this.$router.push({ name: 'user-details', params: { id }});
    },
  },
  beforeMount() {
    this.isLoading = true;
    UserService.getAll().then(({ users }) => {
      this.users = users;
    }).finally(_ => this.isLoading = false);
  },
  components: { UserListItem, InternalServerError }
}
</script>

<template>
  <div>
    <v-overlay :model-value="isLoading" class="align-center justify-center">
      <v-progress-circular color="primary" indeterminate size="64"></v-progress-circular>
    </v-overlay>
    <div v-if="users" class="user-list">
      <div v-for="user in users">
        <UserListItem :user="user" @click-details="onSelectUser"/> 
      </div>
    </div>
    <InternalServerError v-if="!users && !isLoading"/>
  </div>
</template>

<style scoped lang="scss">
  .user-list {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;

    & > div:last-child:nth-child(odd) {
      grid-column: 1 / 3;
    }
  }
   
</style>