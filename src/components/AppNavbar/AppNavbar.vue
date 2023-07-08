<script setup lang="ts">
import { routes } from '@/router/routes';
import { computed } from 'vue';
import { AppNavbarItem } from './AppNavbarItem';
import { AppNavbarProps } from './AppNavbar.types';
import { TYPE_VARIANTS } from './AppNavbar.constants';

const props = withDefaults(defineProps<AppNavbarProps>(), {
  type: 'horizontal',
});

defineEmits<{(e: 'onLinkClick'): void}>();

const classes = computed(() => [
  [
    'app-navbar',
    TYPE_VARIANTS[props.type],
  ],
]);

</script>

<template>
  <nav :class="classes">
    <ul class="app-navbar__list">
      <li class="app-navbar__list-item" v-for="router in routes" :key="router.path">
        <AppNavbarItem
          :link="router.path"
          :is-underline-on-active="props.isUnderlineActiveItem"
          @click="$emit('onLinkClick')"
        >
          {{ router.name }}
        </AppNavbarItem>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
  .app-navbar {
    &_horizontal {
      .app-navbar__list {
        flex-direction: row;
      }
    }

    &_vertical {
      .app-navbar__list {
        flex-direction: column;
        align-items: center;
      }
    }

    &__list {
      display: flex;
      justify-content: space-between;
      list-style: none;
    }

    &__list-item {
      white-space: nowrap;
    }
  }
</style>
