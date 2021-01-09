<template>
	<h1>Home</h1>
	<Header :inputValue="inputValue" :title="title" @searchHandler="setValue()" />
	<!-- <div :style="{ textAlign: 'center' }">
		<h1>Search</h1>
		<input v-model="inputValue" type="text" placeholder="Title" />
		<button @click="setValue()">Search</button>
		<div v-if="title">
			<h4>Showing results for: "{{ title }}"</h4>
		</div>
	</div> -->
	<div>
		<h3>full time</h3>
		<input type="checkbox" v-model="fullTime" />
	</div>
	<div>
		<input v-model="selectedCity" type="radio" id="Munich" name="location" value="Munich" />
		<label for="Munich">Munich</label><br />
		<input v-model="selectedCity" type="radio" id="Amsterdam" name="location" value="Amsterdam" />
		<label for="Amsterdam">Amsterdam</label><br />
		<input v-model="selectedCity" type="radio" id="Remote" name="location" value="Remote" />
		<label for="Remote">Remote</label>
		<br />
		<input
			v-model="selectedCity"
			type="radio"
			id="Weissenhorn"
			name="location"
			value="Weissenhorn"
		/>
		<label for="Weissenhorn">Weissenhorn</label>
		<br />
		<button @click="clearAllFilters">clear</button>
		<hr />
	</div>
	<div>
		<input placeholder="Search City" v-model="selectedCity" type="search" />
	</div>
	<JobList>
		<Job :filteredJobs="!title ? filteredJobs : searchTitles" :title="title" />
	</JobList>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import fetchData from '../api';
import Job from '../components/singleJob/SingleJob.vue';
import JobList from '../components/jobList/JobList.vue';
import Header from '../components/header/Header.vue';

export type JobType = {
	company: string;
	company_logo: string;
	company_url: string;
	created_at: string;
	description: string;
	how_to_apply: string;
	id: string;
	location: string;
	title: string;
	type: string;
	url: string;
};

type Data = {
	jobs: JobType[];
	selectedCity: string;
	fullTime: boolean;
	title: string;
	inputValue: string;
};

export default defineComponent({
	components: {
		JobList,
		Job,
		Header,
	},

	data(): Data {
		return {
			inputValue: '',
			jobs: [],
			selectedCity: '',
			fullTime: false,
			title: '',
		};
	},

	computed: {
		fullTimeJob(): string {
			return this.fullTime ? 'Full Time' : '';
		},
		filteredJobs(): JobType[] {
			return this.jobs.filter((job) => {
				const { type, location } = job;
				const includesCity = location.toLowerCase().includes(this.selectedCity.toLowerCase());
				// const includesTitle = title.toLowerCase().includes(this.title.toLowerCase());
				const includesType = type === 'Full Time';
				if (this.fullTime && !this.title) {
					return includesCity && includesType;
				}
				return includesCity;
			});
		},
		searchTitles(): JobType[] {
			return this.filteredJobs.filter((job) => {
				const title = this.title.toLowerCase();
				return job.title.toLowerCase().includes(title);
			});
		},
	},

	methods: {
		async createJobList() {
			const { data } = await fetchData();
			this.jobs = data;
			console.log(data);
		},
		setValue() {
			if (this.inputValue) {
				this.title = this.inputValue;
				this.inputValue = '';
			}
		},
		clearAllFilters() {
			this.title = '';
			this.selectedCity = '';
			this.fullTime = false;
		},
	},

	created() {
		this.createJobList();
	},
});
</script>
