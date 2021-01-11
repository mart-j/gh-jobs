<template>
  <div class="row">
    <div class="col-xs-offset-1 col-xs-10">
      <div class="row">
        <div class="col-xs-3">
          <button @click="$router.push('/')">Back to search</button>
          <div class="applyInstructions" v-html="position.how_to_apply"></div>
        </div>
        <div class="col-xs-9">
          <div>
            <div>{{ position.title }}</div>
            <div>{{ position.type }}</div>
          </div>
          <div>{{ moment(position.created_at).fromNow() }}</div>
          <div>
            <img :src="position.company_logo" alt="logo" width="100" />
            <div>
              <div>{{ position.company }}</div>
              <div>{{ position.location }}</div>
            </div>
          </div>
          <div v-html="position.description"></div>
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
      return this.jobList.find((pos) => pos.id === this.$route.params.jobId) || ({} as JobType);
    },

    moment() {
      return moment;
    },
  },
});
</script>

<style>
.applyInstructions {
  word-wrap: break-word;
}

</style>
