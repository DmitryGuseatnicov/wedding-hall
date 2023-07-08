import {
  computed, onMounted, onUnmounted, ref,
} from 'vue';

export const useBreakpoints = () => {
  const windowWidth = ref(window.innerWidth);

  const onWidthChange = () => {
    windowWidth.value = window.innerWidth;
  };

  onMounted(() => window.addEventListener('resize', onWidthChange));
  onUnmounted(() => window.removeEventListener('resize', onWidthChange));

  const breakPointType = computed(() => {
    if (windowWidth.value < 768) return 'mobile';
    if (windowWidth.value >= 769 && windowWidth.value < 1024) return 'tablet';
    return 'desktop';
  });

  const width = computed(() => windowWidth.value);

  return { width, breakPointType };
};
