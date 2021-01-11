<template>
  <div class="row center-xs">
    <div class="col-xs-12">
      <SearchField :searchHandler="searchHandler" :title="title" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SearchField from '../searchField/SearchField.vue';

export default defineComponent({
  components: { SearchField },
  emits: ['update:inputValue'],
  data() {
    return {
    };
  },
  props: {
    searchHandler: { type: Function },
    title: { type: String, required: true },
  },
});
</script>

<style></style>
