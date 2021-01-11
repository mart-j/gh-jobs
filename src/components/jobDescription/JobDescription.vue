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
@import './JobDescription.scss';
</style>
