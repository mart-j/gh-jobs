<template>
    <div v-if="!title">
        <div v-for="(job, i) in filteredJobs" :key="i">
        <div>{{ job.location }}</div>
        <div>{{ job.type }}</div>
        <div>{{ job.title }}</div>
        <hr />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { JobType } from '../../pages/Home.vue';

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    filteredJobs: {
      type: Array as () => JobType[],
      required: true,
    },
  },
});

</script>

<style>

</style>
