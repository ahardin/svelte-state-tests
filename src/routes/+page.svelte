<script lang="ts">
	import { invalidate } from "$app/navigation";

	export let data;

	function increment() {
		data = {
			...data,
			count: data.count + 1,
		};
	}
</script>

<h1>Page state</h1>

<div>
	<pre>{JSON.stringify(data)}</pre>
</div>

<div>
	<button on:click={increment}>increment</button>
</div>
