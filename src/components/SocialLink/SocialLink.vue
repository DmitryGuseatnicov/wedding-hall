<script setup lang="ts">
import { computed } from 'vue';
import { COLOR_VARIANTS, SHAPE_VARIANTS, APP_SOCIAL_INFO } from './SocialLink.constants';
import { SocialLinkProps } from './SocialLink.types';

const props = withDefaults(defineProps<SocialLinkProps>(), {
  color: 'main',
  shape: 'round',
});

const classes = computed(() => [
  'social-lick',
  COLOR_VARIANTS[props.color],
  SHAPE_VARIANTS[props.shape],
]);

</script>

<template>
  <a class="social-link" :class="classes" :href="APP_SOCIAL_INFO[props.type]?.link" target="_black">
    <component :is="APP_SOCIAL_INFO[props.type]?.Icon" />
  </a>
</template>

<style lang="scss">
.social-link {
  transition: 0.2s;
  @include centered-flexbox;

  @media (any-hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }

  &_color_second {
    background-color: $color-second;
  }

  &_color_main {
    background-color: $color-main-light;
  }

  &_shape_round {
    width: 48px;
    height: 48px;
  }

  &_shape_square {
    width: 52px;
    height: 52px;
    border-radius: 16px;
  }
}
</style>
