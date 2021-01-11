<template>
  <div class="row">
    <div class="col-xs-offset-1 col-xs-10">
      <div class="row">
        <div class="col-xs-3">
          <div class="sidebar">
            <button @click="$router.push('/')">Back to search</button>
            <h3 class="applyHeader">HOW TO APPLY</h3>
            <div class="applyInstructions" v-html="position.how_to_apply"></div>
          </div>
        </div>
        <div class="col-xs-8">
          <div class="positionTitleWrapper">
            <div class="positionTitle">{{ position.title }}</div>
            <div class="positionType">{{ position.type }}</div>
          </div>
          <div class="positionTimestamp">{{ moment(position.created_at).fromNow() }}</div>
          <div class="positionLogoWrapper">
            <img class="positionLogo" :src="position.company_logo" alt="logo" width="100" />
            <div class="positionCompanyWrapper">
              <div class="positionCompany">{{ position.company }}</div>
              <div class="positionLocation">{{ position.location }}</div>
            </div>
          </div>
          <div class="positionParagraph" v-html="position.description"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import moment from 'moment';
import apiMixin, { JobType } from '../mixins/apiMixin';

export default defineComponent({
  props: { name: { type: String } },

  mixins: [apiMixin],
  data() {
    return {};
  },

  computed: {
    position(): JobType {
      // eslint-disable-next-line arrow-parens
      return this.jobList.find(pos => pos.id === this.$route.params.jobId) || ({} as JobType);
    },

    moment() {
      return moment;
    },
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

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

.positionTitleWrapper {
  margin-bottom: 10px;
  display: flex;
  text-align: center;
}

.positionTitle {
  margin-right: 17px;
  color: #334680;
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: bold;
}
.positionType {
  padding: 5px;
  color: #334680;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  border: 1px solid #334680;
  border-radius: 4px;
}

.positionTimestamp {
  margin-bottom: 35px;
  color: #b7bcce;
  font-weight: 500;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
}

.positionLogoWrapper {
  display: flex;
  margin-bottom: 32px;
}

.positionLogo {
  margin-right: 12px;
  border-radius: 4px;
  width: 42px;
}

.positionCompanyWrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.positionCompany {
  color: #334680;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: bold;
}

.positionLocation {
  color: #b7bcce;
  font-weight: 500;
  font-size: 12px;
  font-family: 'Roboto', sans-serif;
}

.positionParagraph {
  color: rgba(51, 70, 128, 1);
  font-weight: 400;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  line-height: 24px;
}
</style>
