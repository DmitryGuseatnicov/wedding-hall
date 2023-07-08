<script setup lang="ts">
import { AppHeader } from '@/components/AppHeader';
</script>

<template>
  <AppHeader />
  <router-view/>
</template>

<style lang="scss">
@import "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap";

html {
  background: $background-main;
  @include text-main;
}

html,
body {
  height: 100%;
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
</style>
