<script setup lang="ts">
import { computed } from 'vue';
import { ProgressLineProps } from './ProgressLine.types';

const props = defineProps<ProgressLineProps>();

const progressPercents = computed(() => (100 / props.steps) * props.currentStep);

</script>

<template>
  <div class="progress-line" ref="progressLineRef">
    <div class="progress-line__progress" :style="{width: `${progressPercents}%`}"/>
  </div>
</template>

<style lang="scss">
.progress-line {
  width: 100%;
  height: 4px;;
  background: #fff;

  &__progress {
    height: 100%;
    background: $color-second;
    transition: 0.2s;
  }
}
</style>
