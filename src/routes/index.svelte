<script>
	import Box from '../components/ui/box.svelte'
	import CharacterList from '../components/view-elements/character-list.svelte'
	import ViewSelector from '../components/view-elements/view-selector.svelte'
	import GameStatus from '../components/view-elements/game-status.svelte'
	// import CurrentLocation from '../components/view-elements/location.svelte'

	import { onMount } from "svelte";

	onMount(() => {
		console.log('I am mounted')

	})
</script>

<div class="main-menu-view flex">
	<CharacterList />
	<!-- <ViewSelector /> -->
	<!-- <GameStatus />  -->
	<!-- <CurrentLocation /> -->
</div>

<!-- <h1>Test</h1> -->

<style>
	.main-menu-view {
		width: 100%;
		height: 100%;
	}
</style>