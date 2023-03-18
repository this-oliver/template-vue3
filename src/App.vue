<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppNav from './components/AppNav.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppFooter from './components/AppFooter.vue';
import BasePage from './components/base/BasePage.vue';
</script>

<template>
  <v-app>
    <app-nav />
    <app-sidebar />
    
    <v-main id="app-content">
      <base-page>
        <router-view />
      </base-page>
    </v-main>

    <app-footer />
  </v-app>
</template>
