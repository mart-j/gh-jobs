<template>
  <div>GithubJobs</div>
  <div :style="{ textAlign: 'center' }">
    <h1>Search</h1>
    <input :value="inputValue" @input="$emit('update:inputValue', $event.target.value)" />
    <button @click="$emit('searchHandler')">Search</button>
    <div v-if="title">
      <h4>Showing results for: "{{ title }}"</h4>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['searchHandler', 'update:inputValue'],
  props: {
    inputValue: { type: String, required: true },
    title: { type: String, required: true },
  },
});
</script>

<style></style>
