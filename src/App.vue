<script setup lang="ts">
import { AppHeader } from '@/components/AppHeader';
import { AppFooter } from './components/AppFooter';
</script>

<template>
  <AppHeader />
    <main>
      <router-view/>
    </main>
    <AppFooter />
</template>

<style lang="scss">
@import "https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap";

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background: $background-main;
  @include text-main;
}

body {
  display: flex;
  align-items: stretch;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
}

main {
  height: 100%;
}

#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
