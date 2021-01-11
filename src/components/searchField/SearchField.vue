<template>
  <div class="row center-xs">
    <div class="col-xs-12">
      <div class="headerWrapper">
        <img src="../../assets/backgroundImg.png" alt="Background" class="image" />
        <div class="inputWrapper">
          <div class="inputFieldWrapper">
            <input v-model="inputValue" class="input" />
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

<style>
.headerWrapper {
  position: relative;
}

.image {
  width: 100%;
}

.inputWrapper {
  position: absolute;
  width: 60%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.input {
  position: relative;
  padding: 10px;
  width: 100%;
}

.button {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(-50%, -50%);
}
.searchResults {
  white-space: nowrap;
  position: absolute;
  left: 50%;
  right: 0;
  transform: translate(-50%, 0);
  bottom: -45px;
  color: rgba(0, 0, 0, 0.651);
}
</style>
