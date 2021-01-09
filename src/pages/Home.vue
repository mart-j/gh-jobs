<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <Header v-model:inputValue="inputValue" :title="title" @searchHandler="setValue()" />
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
      <div class="col-xs-6">
        <JobList>
          <Job :filteredJobs="!title ? filteredJobs : searchTitles" :title="title" />
        </JobList>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'flexboxgrid';
import fetchData from '../api';
import Job from '../components/singleJob/SingleJob.vue';
import JobList from '../components/jobList/JobList.vue';
import Header from '../components/header/Header.vue';
import Sidebar from '../components/siderBar/SideBar.vue';

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
    Sidebar,
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
      this.inputValue = '';
    },
  },

  created() {
    this.createJobList();
  },
});
</script>
