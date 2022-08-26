<script>
  export let value = 'Menu Item'
  export let onClick = () => console.log('clicked: ', value)
  export let isLink = false
  export let disabled = false
  export let fontSize = "normal"
  export let color = "white"
  export let weight = "normal"
</script>

<div 
  class="app-text" 
  data-is-link={isLink}
  on:click={onClick}
  data-disabled={disabled}
  data-size={fontSize}
  style={`color: ${color}; font-weight: ${weight}`}
  >
  <p>{value}</p>
</div>

<style>
  .app-text{
    font-weight: normal;
    color: var(--off-white);
    line-height: 1; 
    height: auto;
    height: fit-content;
  }

  [data-is-link="true"] {
    cursor: pointer;
  }

  [data-is-link="true"]:not([data-disabled="true"]):hover {
    color: goldenrod;
  }
   
  [data-disabled="true"] {
    opacity: 0.5;
  }

  [data-size="normal"] {
    font-size: 1.5em;
  }
  [data-size="small"] {
    font-size: 0.9em;
  }
  [data-size="large"] {
    font-size: 2em;
  }
</style>