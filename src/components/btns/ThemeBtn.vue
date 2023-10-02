<script setup lang="ts">
import { computed } from 'vue';
import BaseBtn from '@/components/base/BaseBtn.vue';
import { useTheme } from '@/composables/useTheme';

const { dark } = useTheme();

const props = defineProps({
	listMode: {
		type: Boolean,
		default: false
	}
});

const icon = computed<string>(() => {
	return dark.value ? 'mdi-weather-night' : 'mdi-white-balance-sunny';
});

function toggleTheme () {
	dark.value = !dark.value;
}

</script>

<template>
  <v-list-item
    v-if="props.listMode"
    @click="toggleTheme">
    <v-list-item-title>
      Theme
    </v-list-item-title>

    <template #prepend>
      <v-icon :icon="icon" />
    </template>
  </v-list-item>

  <base-btn
    v-else
    plain
    class="mx-1"
    @click="toggleTheme">
    <v-icon :icon="icon" />
  </base-btn>
</template>
