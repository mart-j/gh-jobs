<template>
  <div class="sidebar">
    <button class="backButton" @click="$router.push('/')">
      <div class="arrowWrapper">
        <div class="triangle"></div>
        <div class="rectangle"></div>
      </div>
      <div>Back to search</div>
    </button>
    <h3 class="applyHeader">HOW TO APPLY</h3>
    <div class="applyInstructions" v-html="position.how_to_apply"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { JobType } from '../../mixins/apiMixin';

export default defineComponent({
  props: {
    position: { type: Object as () => JobType, required: true },
  },
});
</script>

<style lang="scss">
.backButton {
  cursor: pointer;
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  color: #2285fa;
}
.arrowWrapper {
  display: flex;
  align-items: center;
  margin-right: 4px;
}
.triangle {
  width: 0;
  height: 0;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  border-right: 10px solid #2285fa;
}

.rectangle {
  background-color: #2285fa;
  height: 2px;
  width: 14px;
}

.applyInstructions {
  word-wrap: break-word;
  color: #334680;
}

.applyInstructions a {
  color: #1e86ff;
}

.applyHeader {
  color: #b9bdcf;
  font-size: 14px;
}

.sidebar {
  margin-right: 70px;
}
</style>
