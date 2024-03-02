<script lang="ts">
	import "./styles.css";
	import { page } from "$app/stores";
    import { invalidate } from "$app/navigation";
</script>

<div class="app">
	<div>
		<h1>Layout state ($page)</h1>

		<div>
			<pre>{JSON.stringify($page.data)}</pre>
		</div>

		<div>
			<button on:click={() => invalidate("invalidate:me")}
				>invalidate!</button
			>
		</div>
	</div>

	<div>
		<slot />
	</div>
</div>

<style>
	.app {
		max-width: 800px;
		margin: 24px auto;
		display: flex;
	}
	.app > div {
		padding: 12px;
		flex: 1;
		text-align: center;
	}
</style>
