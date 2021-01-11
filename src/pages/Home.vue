<template>
  <div class="row">
    <div class="col-xs-offset-1 col-xs-10 margin-bottom--42">
      <Header :searchHandler="searchHandler" :title="title" />
    </div>
  </div>
  <div class="row">
    <div class="col-xs-offset-1 col-xs-3">
      <Sidebar
        :fullTime="fullTime"
        :selectedCity="selectedCity"
        v-model:fullTime="fullTime"
        v-model:selectedCity="selectedCity"
        v-model:searchCity="selectedCity"
        @clickHandler="clearAllFilters()"
      />
    </div>
    <div class="col-xs-7">
      <JobList>
        <Job :filteredJobs="!title ? splittedArray[pageNumber] : searchTitles" :title="title" />
      </JobList>
      <div v-if="!title">
        <button :disabled="pageNumber < 1" @click="pageNumber -= 1">prev</button>
        <button :disabled="pageNumber > splittedArray.length - 2" @click="pageNumber += 1">
          next
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Job from '../components/singleJob/SingleJob.vue';
import JobList from '../components/jobList/JobList.vue';
import Header from '../components/header/Header.vue';
import Sidebar from '../components/siderBar/SideBar.vue';
import apiMixin, { JobType } from '../mixins/apiMixin';

type Data = {
  selectedCity: string;
  fullTime: boolean;
  title: string;
  pageNumber: number;
};

export default defineComponent({
	components: {
		JobList,
		Job,
		Header,
		Sidebar,
	},

	data(): Data {
		return {
			selectedCity: '',
			fullTime: false,
			title: '',
			pageNumber: 0,
		};
	},

	watch: {
		selectedCity() {
			this.pageNumber = 0;
		},
	},
	computed: {
		fullTimeJob(): string {
			return this.fullTime ? 'Full Time' : '';
		},
		filteredJobs(): JobType[] {
			// eslint-disable-next-line arrow-parens
			return this.jobList.filter(job => {
				const { type, location } = job;
				const includesCity = location.toLowerCase().includes(this.selectedCity.toLowerCase());
				const includesType = type === 'Full Time';
				if (this.fullTime && !this.title) {
					return includesCity && includesType;
				}
				return includesCity;
			});
		},
		splittedArray(): JobType[][] {
			const newJobs = [...this.filteredJobs];
			const chunks = [];
			let i = 0;
			while (i < newJobs.length) {
				chunks.push(newJobs.slice(i, (i += 5)));
			}
			return chunks;
		},
		searchTitles(): JobType[] {
			// eslint-disable-next-line arrow-parens
			return this.filteredJobs.filter(job => {
				const title = this.title.toLowerCase();
				return job.title.toLowerCase().includes(title);
			});
		},
	},
	mixins: [apiMixin],

	methods: {
		searchHandler(inputValue: string) {
			this.title = inputValue;
		},
		clearAllFilters() {
			this.title = '';
			this.selectedCity = '';
			this.fullTime = false;
		},
	},
});
</script>

<style>
.margin-bottom--42 {
  margin-bottom: 42px;
}
</style>
