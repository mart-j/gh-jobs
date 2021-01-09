<template>
  <div>
    <h3>full time</h3>
    <input type="checkbox" @change="$emit('update:fullTime', !fullTime)" :checked="fullTime" />
  </div>
  <div>
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
    <button @click="$emit('clickHandler')">clear</button>
    <hr />
  </div>
  <div>
    <input
      placeholder="Search City"
      @input="$emit('update:searchCity', $event.target.value)"
      :value="selectedCity"
      type="search"
    />
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

<style>
</style>
