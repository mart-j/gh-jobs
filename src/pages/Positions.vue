<template>
  <div class="row">
    <div class="col-xs-offset-1 col-xs-10">
      <div class="row">
        <div class="col-xs-3">
          <ApplyInstructions :position="position" />
        </div>
        <div class="col-xs-8">
          <JobDescription :position="position" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import JobDescription from '../components/jobDescription/JobDescription.vue';
import ApplyInstructions from '../components/applyInstructions/ApplyInstuctions.vue';

import apiMixin, { JobType } from '../mixins/apiMixin';

export default defineComponent({
  props: { name: { type: String } },
  mixins: [apiMixin],
  data() {
    return {};
  },
  components: {
    JobDescription,
    ApplyInstructions,
  },

  computed: {
    position(): JobType {
      // eslint-disable-next-line arrow-parens
      return this.jobList.find((pos) => pos.id === this.$route.params.jobId) || ({} as JobType);
    },
  },
});
</script>
