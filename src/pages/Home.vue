<template>
  <h1>hoome</h1>
  <div :style="{ textAlign: 'center' }">
    <h1>Search</h1>
    <input v-model="title" type="text" placeholder="Title" />
    <button type="button">Search</button>
  </div>
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
    <button @click="selectedCity = ''">clear</button>
    <hr />
  </div>
  <div>
    <input placeholder="Search City" v-model="selectedCity" type="search" />
  </div>
  <div v-if="!title">
    <div v-for="(job, i) in filteredJobs" :key="i">
      <div>{{ job.location }}</div>
      <div>{{ job.type }}</div>
      <div>{{ job.title }}</div>
      <hr />
    </div>
  </div>
  <div v-else>
    <div v-for="(job, i) in searchTitles" :key="i">
      <div>{{ job.location }}</div>
      <div>{{ job.type }}</div>
      <div>{{ job.title }}</div>
      <hr />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import fetchData from '../api';

type Job = {
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
  jobs: Job[];
  selectedCity: string;
  fullTime: boolean;
  title: string;
};

export default defineComponent({
  data(): Data {
    return {
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
    filteredJobs(): Job[] {
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
    searchTitles(): Job[] {
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
  },

  created() {
    this.createJobList();
  },
});
</script>
