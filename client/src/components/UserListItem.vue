<script lang="ts">
import type { User } from '@/models/User';
import type { PropType } from 'vue'

export default {
  props: {
    user: {
      default: {},
      require: true,
      type: Object as PropType<User>,
    },
  },
  methods: {
    handleMoreDetails() {
      this.$emit('click-details', this.user.id);
    }
  }
}  
</script>

<template>
  <v-card
    :title="user.name"
    :subtitle="user.email"
  >
    <template v-slot:subtitle>
      <div class="user-list-item__subtitle">
        <div class="user-list-item__subtitle__email user-list-item__subtitle__item">
          <v-icon icon="mdi-email" size="small"></v-icon>
          <div>{{  user.email  }}</div>
        </div>
        <div class="user-list-item__subtitle__city user-list-item__subtitle__item">
          <v-icon icon="mdi-city" size="small"></v-icon>
          <div>{{ user.city }}</div>
        </div>
      </div>
    </template>
    <v-card-actions>
      <div class="user-list-item__actions">
        <v-btn @click="handleMoreDetails">more info</v-btn>
      </div>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">
  .user-list-item {

    &__actions {
      padding: 0;
    }

    &__subtitle {
      display: flex;

      &__item {
        display: flex;
        align-items: end;
        line-height: 0.85rem;
        font-size: 0.85rem;

        i {
          margin-right: 0.1rem;
        }
      }

      &__email {
        margin-right: 1rem;
      }
    }
  }
</style>