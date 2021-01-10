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

<style>
.sidebar {
	padding-right: 20px;
}

.cities {
	margin-left: 10px;
	margin-bottom: 30px;
}

.cities label {
	color: #334680;
}

.cities input {
	margin-bottom: 14px;
	margin-right: 10px;
}

.checkbox {
	margin: 0 10px 30px 10px;
}

.ceckboxLabel {
	color: #334680;
}

.location {
	color: #b9bdcf;
	font-size: 14px;
	margin-bottom: 14px;
}

.searchField {
	padding: 10px;
	width: 100%;
	margin-bottom: 24px;
}

.clearButton {
	margin-left: 10px;
	outline: none;
	border: 1px solid #b9bdcf;
	border-radius: 6px;
	background: white;
	cursor: pointer;
	font-size: 16px;
	padding: 8px;
	color: #334680;
}
</style>
