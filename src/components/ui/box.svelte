<script>
	export let width = '100%'
	export let height = '100%'
	export let backgroundColor = 'var(--off-white);'
	export let padding = "20px"
	
	$: containerStyle = `
		height: ${height};
		width: ${width};
		padding: ${padding};
	`
</script>

<div class="box" style={containerStyle}>
	<slot />
</div>

<style>
	.box {
		background: var(--dark-gray);
		border: solid thin lightgray;
		padding: 20px;
		border-radius: 4px;
	}
</style>
