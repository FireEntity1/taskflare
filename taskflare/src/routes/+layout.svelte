<script>
	import '../app.css';
	import App from '../App.svelte';
	let { children } = $props();
</script>

<App />

{@render children()}
