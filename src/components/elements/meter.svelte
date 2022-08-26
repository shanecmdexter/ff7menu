<script>
  import Text from '@/components/ui/text.svelte'
  export let required = 135;
  export let current = 22;
  export let label = ""
  export let printValue = true
  // format can be a string equal to 'percentage' or 'ratio'
  export let format = 'ratio'

  $: percentage = Math.round( (current / required) * 100 );
  
  $: color = getColour(percentage)

  function getColour(percentage){
    let useColour = color;

    if(percentage === 0){
      useColour = 'lightgray'
    }
    else if(percentage > 0 && percentage < 25){
      useColour = 'lightslategray'
    }
    else if(percentage > 25 && percentage < 50){
      useColour = 'blue'
    }
    else if(percentage > 50 && percentage < 75){
      useColour = 'darkturquoise'
    }
    else if(percentage > 75 && percentage < 100){
      useColour = 'springgreen'
    }

    return useColour
  }

</script>

<div class="meter-wrapper">
  {#if label === 'HP'}
    <div class="label">
      <Text 
        value="HP" 
        fontSize="small" 
        color="lightgray" 
        weight="lighter" 
      />
      {#if printValue && format === 'percentage'}
        <Text 
          value={percentage + '%'} 
          fontSize="small" 
          color="whitesmoke"  
        />
      {:else if printValue && format === 'ratio'}
        <div class="ratio flex ai-end">
          <Text 
            value={current} 
            fontSize="small" 
            color={color}  
          />
          <Text 
            value="/" 
            fontSize="small" 
            color="gray"  
          />
          <Text 
            value={required} 
            fontSize="small" 
            weight="lighter" 
            color="whitesmoke"  
          />
        </div>
      {/if}
    </div>
    
    {:else if label === 'MP'}
      <div class="label">
      <Text 
        value="MP" 
        fontSize="small" 
        color="darkgray" 
        weight="lighter" 
      />
      {#if printValue && format === 'percentage'}
        <Text 
          value={percentage + '%'} 
          fontSize="small" 
          color="whitesmoke"  
        />
      {:else if printValue && format === 'ratio'}
        <div class="ratio flex ai-end">
          <Text 
            value={current} 
            fontSize="small" 
            color={color}  
          />
          <Text 
            value="/" 
            fontSize="small" 
            color="gray"  
          />
          <Text 
            value={required} 
            fontSize="small" 
            weight="lighter" 
            color="whitesmoke"  
          />
        </div>
      {/if}
    </div>

    {:else if label === 'Next Level'}
      <div class="label">
      <Text 
        value="Next Level" 
        fontSize="small" 
        color="darkgray" 
        weight="lighter" 
      />
      {#if printValue && format === 'percentage'}
        <Text 
          value={percentage + '%'} 
          fontSize="small" 
          color="whitesmoke"  
        />
      {:else if printValue && format === 'ratio'}
        <div class="ratio flex ai-end">
          <Text 
            value={current} 
            fontSize="small" 
            color={color}  
          />
          <Text 
            value="/" 
            fontSize="small" 
            color="gray"  
          />
          <Text 
            value={required} 
            fontSize="small" 
            weight="lighter" 
            color="whitesmoke"  
          />
        </div>
      {/if}
    </div>

    {:else if label === 'Limit Level'}
      <div class="label">
      <Text 
        value="Limit Level" 
        fontSize="small" 
        color="darkgray" 
        weight="lighter" 
      />
      {#if printValue && format === 'percentage'}
        <Text 
          value={percentage + '%'} 
          fontSize="small" 
          color="whitesmoke"  
        />
      {:else if printValue && format === 'ratio'}
        <div class="ratio flex ai-end">
          <Text 
            value={current} 
            fontSize="small" 
            color={color}  
          />
          <Text 
            value="/" 
            fontSize="small" 
            color="gray"  
          />
          <Text 
            value={required} 
            fontSize="small" 
            weight="lighter" 
            color="whitesmoke"  
          />
        </div>
      {/if}
    </div>
  {/if}

  <div class="meter">
    <div 
      class="fill-percentage" 
      style={`width: ${percentage}%; background-color: ${color};`}
    ></div>
  </div>
</div>


<style>
  .meter-wrapper {
    width: 120px;
  }

  .meter {
    width: 100%;
    height: 14px;
    border-radius: 5px;
    padding: 0;
    margin-top: 6px;
    border: solid thin lightgray;
    position: relative;
  }

  .fill-percentage {
    height: 8px;
    border-radius: 4px;
    position: absolute;
    top: 2px;
    left: 2px;
    max-width: calc(100% - 6px);
    background-color: blue;
  }

  .label {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .ratio {
    gap: 5px;
  }
</style>