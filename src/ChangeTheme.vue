<!--
	OVERVIEW
	Subcomponent connected to AppTopBar to allow theme change via clicking the moon/sun icon
-->
<template>
	<div>
		<!-- true for darkmode, false for lightmode -->
		<Button v-if="!dark" icon="pi pi-moon text-yellow-500 text-xl" class="p-link" type="button" @click="changeTheme($event, 'lara-dark-indigo', true)">
		</Button>
		<Button v-else icon="pi pi-sun text-yellow-500 text-xl" class="p-link" type="button" @click="changeTheme($event, 'lara-light-indigo', false)">
		</Button>
	</div>
</template>

<script>
import EventBus from './AppEventBus.js';

	export default {
		data() {
			return {
				dark: this.dark // Stores dark/light mode toggle state
			}
		},
		props: {
			layoutMode: {
				type: String,
				default: null
			}
		},
		methods: {
			changeTheme(event, theme, color) {
				EventBus.emit('theme-change', { theme: theme, dark: color });
				event.preventDefault();
				this.dark = !this.dark
				localStorage.setItem("theme", this.dark)
			}
		},
		beforeMount() {
			if (!localStorage.getItem("theme")) localStorage.setItem("theme", true);
			this.dark = localStorage.getItem("theme") === "true"
			if (this.dark) {
				EventBus.emit('theme-change', { theme: 'lara-dark-indigo', dark: true });
			} else {
				EventBus.emit('theme-change', { theme: 'lara-light-indigo', dark: false });
			}
		}
	}
</script>
