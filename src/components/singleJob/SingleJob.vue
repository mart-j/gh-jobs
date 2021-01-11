<template>
  <div>
    <div
      v-for="(job, i) in filteredJobs"
      :key="i"
      @click="$router.push(`/positions/${job.id}`)"
      class="jobCard"
    >
      <div class="logoWrapper">
        <img class="logo" :src="job.company_logo" alt="logo" width="100" />
      </div>
      <div class="contentWrapper">
        <div class="companyName">{{ job.company }}</div>
        <div class="jobTitle">{{ job.title }}</div>
        <div class="cardFooter">
          <div class="jobType">{{ job.type }}</div>
          <div class="timeLocationWrapper">
            <div class="location">{{ job.location }}</div>
            <div>{{ moment(job.created_at).fromNow() }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';
import { JobType } from '../../mixins/apiMixin';

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

	computed: {
		moment() {
			return moment;
		},
	},
});
</script>

<style style scoped lang="scss">
@import './SingleJOb.scss';
</style>
