<script>
  import {inventory} from '@/state/app-state.js'
  import Text from '@/components/ui/text.svelte'

  export let itemIcon = '';
  export let onClick
  
  function handleClick(item, itemIndex) {
    if(onClick && typeof onClick === 'function'){
      onClick(item, itemIndex)
    }
    else{
      console.log('Used Item ')
    }
  }
</script>

<ul class="items-list">
  {#each $inventory.items as item, index}
    <li on:click={() => handleClick(item, index)} class="item-display">
      <div class="icon">{itemIcon}</div>
      <Text value={item.name} isLink={true} />
      <Text value={item.number} />
    </li>
  {/each}
</ul>

<style>
  .item-display {
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    gap: 20px;
  }

  .icon {
    height: 30px;
    width: 40px;
    border-radius: 4px;
    background: gainsboro;
  }

   .items-list {
    height: 100%;
    overflow-y: scroll;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 15px;
    margin: 0;
    padding: 10px;
    align-items: flex-start;
    height: 70%;
  }
</style>