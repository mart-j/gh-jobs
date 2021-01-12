<template>
  <div class="row center-xs">
    <div class="col-xs-12">
      <div class="headerWrapper">
        <img src="../../assets/backgroundImg.png" alt="Background" class="image" />
        <div class="inputWrapper">
          <div class="inputFieldWrapper">
            <input placeholder="Search job title" v-model="inputValue" class="input" />
            <button
              @click="
                searchHandler(inputValue);
                clearSearchField();
              "
              class="button"
            >
              Search
            </button>
          </div>
        </div>
        <div class="searchResults" v-if="title">
          <div>Showing results for: "{{ title }}"</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'flexboxgrid';

export default defineComponent({
  emits: ['searchHandler', 'update:inputValue'],
  props: {
    searchHandler: { type: Function, required: true },
    title: { type: String, required: true },
  },
  data() {
    return {
      inputValue: '',
    };
  },

  methods: {
    clearSearchField() {
      this.inputValue = '';
    },
  },
});
</script>

<style lang="scss" scoped>
@import './SearchField.scss';
</style>
