<script setup lang="ts">
import { AppNavbarItemProps } from './AppNavbarItem.types';

defineProps<AppNavbarItemProps>();

</script>
<template>
    <router-link
        :class="[
            'app-navbar-item',
            isUnderlineOnActive ? 'app-navbar-item_with_active_border' : ''
        ]"
        :to="link" active-class="app-navbar-item_active"
    >
        <slot />
    </router-link>
</template>

<style lang="scss">
.app-navbar-item {
    color: $color-main-darker;
    text-decoration: none;
    display: inline-block;
    padding: 0 16px 16px 16px;

    @include text-main;

    &.app-navbar-item_active {
        color: $color-second;

        &.app-navbar-item_with_active_border {
            border-bottom: 2px solid $color-second;
        }
    }
}
</style>
