<template>
  <div>
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
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import moment from 'moment';
import { JobType } from '../../mixins/apiMixin';

export default defineComponent({
  props: {
    position: { type: Object as () => JobType, required: true },
  },
  computed: {
    moment() {
      return moment;
    },
  },
});
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

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
