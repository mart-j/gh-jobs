<template>
	<div class="row center-xs">
		<div class="col-xs-12">
			<div class="headerWrapper">
				<img src="../../assets/backgroundImg.png" alt="Background" class="image" />
				<div class="inputWrapper">
					<div class="inputFieldWrapper">
						<input
							:value="inputValue"
							@input="$emit('update:inputValue', $event.target.value)"
							class="input"
						/>
						<button @click="$emit('searchHandler')" class="button">Search</button>
					</div>
				</div>
				<div v-if="title">
					<h4>Showing results for: "{{ title }}"</h4>
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
		inputValue: { type: String, required: true },
		title: { type: String, required: true },
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
</style>
