<script>
	import '@/styles'
	import Nav from '@/components/ui/nav.svelte'
	import GameStatus from '../components/view-elements/game-status.svelte'
	import CharacterList from '../components/view-elements/character-list.svelte'
	import Save from '@/components/ui/save.svelte'
	import {onMount} from 'svelte'
  import {lastAction} from '@/state/app-state'

	let listening = false;

	function onKeyDown(e){
		// console.log('keydown event is: ', e)
	}

	onMount(() => {
		console.log('mounted!')
	})
</script>

<div id="app-layout">
	<!-- Nav -->
	<Nav />
	<main>
		<div class="current-view">
			<slot />
		</div>
	</main>
	<footer>
		<!-- game state -->
		<GameStatus />
		<!-- last action -->
		<div class="last-action">
			<p>{$lastAction.type}</p>
			<p>{$lastAction.value}</p>
		</div>
		<!-- last saved which is a date and time / how much time has passed between saves -->
		<Save />
	</footer>
</div>

<style>
	:global:html {
		font-family: 'Mulish', sans-serif;
	}

	#app-layout {
		background-color: var(--off-black);
		display: grid; 
		grid-template-columns: 1fr;
		/* grid-template-rows: 100px calc(1fr - 200px - 40px) 100px; */
		grid-template-rows: 100px calc(100% - 200px - 40px) 100px;
		gap: 20px;
		padding: 20px;
		min-height: 100vh; 
		min-width: 100vw; 
		/* height: fit-content; */
		height: 100vh;
		max-height: 100vh;
		overflow: hidden;
		width: 100%;
		max-width: 100vw;
	}
	
	.current-view {
		/* padding: 20px; */
		max-height: calc(100vh - 200px - 40px);
		/* max-height: 100%; */
		height: 100%;
	}

	.last-action {
		color: white;
	}

	main {
		height: 100%;
		max-height: 100%;
		width: 100%;
		position: relative;
	}

	footer {
		display: grid;
    gap: 20px;
    grid-template-columns: calc(200px + 40px) auto 1fr;
		height: 100px;
		width: 100%;
		max-height: 100px;
		justify-items: flex-end;
	}
</style>