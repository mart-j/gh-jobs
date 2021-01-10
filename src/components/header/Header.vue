<template>
	<div class="row">
		<div class="col-xs-12">
			<Logo />
		</div>
	</div>
	<div class="row center-xs">
		<div class="col-xs-12">
			<SearchField :title="title" :inputValue="inputValue" />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '../logo/Logo.vue';
import SearchField from '../searchField/SearchField.vue';

export default defineComponent({
	components: { Logo, SearchField },
	emits: ['searchHandler', 'update:inputValue'],
	props: {
		inputValue: { type: String, required: true },
		title: { type: String, required: true },
	},
});
</script>

<style></style>
