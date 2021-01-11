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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

.jobCard {
  cursor: pointer;
  display: flex;
  background-color: white;
  margin-bottom: 20px;
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
}
.contentWrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  color: #334680;
  font-family: 'Roboto', sans-serif;
}

.logoWrapper {
  display: flex;
  align-items: center;
  width: 100px;
  height: 100px;
  margin-right: 10px;
}

.logo {
  border-radius: 4px;
}

.cardFooter {
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.jobType {
  border: 1px solid #8d909b;
  padding: 5px;
  border-radius: 5px;
}
.timeLocationWrapper {
  display: flex;
  color: #8d909b;
}

.timeLocationWrapper div {
  margin-right: 20px;
}

.companyName {
  font-size: 10px;
  font-weight: 700;
}
</style>
