<script setup lang="ts">
import { computed } from 'vue';
import { useDisplay } from 'vuetify'
import { useSidebarStore, useNavigationStore } from '@/stores'
import BaseBtn from './base/BaseBtn.vue';
import AppLogo from './AppLogo.vue';

const drawer = useSidebarStore();
const navigation = useNavigationStore();

const { name } = useDisplay();

const isSmallScreen = computed(() => {
  return name.value === 'xs' || name.value === 'sm';
});

</script>

<template>
  <v-app-bar
    app
    flat
    color="primary"
    class="bar-container">
    <v-app-bar-nav-icon
      v-if="isSmallScreen"
      @click="drawer.toggle" />

    <router-link
      class="bar-logo"
      to="/">
      <app-logo />
    </router-link>

    <v-spacer />

    <div v-if="!isSmallScreen">
      <base-btn
        v-for="option in navigation.options"
        :key="option.label"
        class="mx-1"
        :to="option.to"
        @click="option.action">
        {{ option.label }}
      </base-btn>
    </div>
  </v-app-bar>
</template>

<style scoped>
.bar-container {
  position: relative;
}

.bar-logo {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>