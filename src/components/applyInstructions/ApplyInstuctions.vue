<template>
	<div class="sidebar">
		<button class="backButton" @click="$router.push('/')">
			<div class="arrowWrapper">
				<div class="triangle"></div>
				<div class="rectangle"></div>
			</div>
			<div>Back to search</div>
		</button>
		<h3 class="applyHeader">HOW TO APPLY</h3>
		<div class="applyInstructions" v-html="position.how_to_apply"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { JobType } from '../../mixins/apiMixin';

export default defineComponent({
	props: {
		position: { type: Object as () => JobType, required: true },
	},
});
</script>

<style lang="scss">
@import './ApplyInstuctions.scss';
</style>
