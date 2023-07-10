<script setup lang="ts">
import { AppNavbarItemProps } from './AppNavbarItem.types';

defineProps<AppNavbarItemProps>();

</script>
<template>
  <router-link :class="[
    'app-navbar-item',
    isUnderlineOnActive ? 'app-navbar-item_with_active_border' : ''
  ]" :to="link" active-class="app-navbar-item_active">
    <slot />
  </router-link>
</template>

<style lang="scss">
.app-navbar-item {
  position: relative;
  color: $color-main-darkness;
  text-decoration: none;
  display: inline-block;
  padding: 0 16px 16px 16px;

  @include text-main;

  &_with_active_border {
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 0px;
      height: 2px;
      background: $color-second;
      transition: 0.2s;
    }

    @media (any-hover: hover) {
      &:hover {
        &::before {
          width: 100%;
        }
      }
    }
  }

  &.app-navbar-item_active {
    color: $color-second;

    &.app-navbar-item_with_active_border {
      &::before {
        width: 100%;
      }
    }
  }
}
</style>
