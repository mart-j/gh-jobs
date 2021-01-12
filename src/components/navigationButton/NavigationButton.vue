<template>
  <button class="button" @click="$emit('clickHandler')">
    <slot></slot>
    <div class="arrow" :style="{ transform: `rotate(${arrowDirection}deg)` }"></div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    direction: {
      type: (String as () => 'left') || 'right',
      required: true,
    },
  },

  computed: {
    arrowDirection(): number {
      if (this.direction === 'left') {
        return 135;
      }
      return -45;
    },
  },
});
</script>

<style lang="scss">
.button {
  padding: 5px;
}

.arrow {
  width: 10px;
  height: 10px;
  border-bottom: 2px solid red;
  border-right: 2px solid red;
}
</style>
