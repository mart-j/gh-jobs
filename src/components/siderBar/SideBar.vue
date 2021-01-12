<template>
  <div class="sidebar">
    <div>
      <input
        class="checkbox"
        type="checkbox"
        @change="$emit('update:fullTime', !fullTime)"
        id="fulltime"
        :checked="fullTime"
      />
      <label for="fulltime" class="ceckboxLabel">Full time</label>
    </div>
    <div>
      <div class="location">LOCATION</div>
      <input
        class="searchField"
        placeholder="Search City"
        @input="$emit('update:searchCity', $event.target.value)"
        :value="selectedCity"
        type="search"
      />
    </div>
    <div class="cities">
      <input
        @change="$emit('update:selectedCity', $event.target.value)"
        type="radio"
        id="Munich"
        name="location"
        value="Munich"
        :checked="Boolean(selectedCity) && selectedCity === 'Munich'"
      />
      <label for="Munich">Munich</label><br />
      <input
        @change="$emit('update:selectedCity', $event.target.value)"
        type="radio"
        id="Amsterdam"
        name="location"
        value="Amsterdam"
        :checked="Boolean(selectedCity) && selectedCity === 'Amsterdam'"
      />
      <label for="Amsterdam">Amsterdam</label><br />
      <input
        @change="$emit('update:selectedCity', $event.target.value)"
        type="radio"
        id="Remote"
        name="location"
        value="Remote"
        :checked="Boolean(selectedCity) && selectedCity === 'Remote'"
      />
      <label for="Remote">Remote</label>
      <br />
      <input
        @change="$emit('update:selectedCity', $event.target.value)"
        type="radio"
        id="Weissenhorn"
        name="location"
        value="Weissenhorn"
        :checked="Boolean(selectedCity) && selectedCity === 'Weissenhorn'"
      />
      <label for="Weissenhorn">Weissenhorn</label>
      <br />
    </div>
    <button @click="$emit('clickHandler')" class="clearButton"><b>Clear filters</b></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['update:searchCity', 'clickHandler', 'update:selectedCity', 'update:fullTime'],
  props: {
    fullTime: { type: Boolean, required: true },
    selectedCity: { type: String, required: true },
  },
});
</script>

<style scoped lang="scss">
@import './SideBar.scss';
</style>
