<script>
  import Box from '@/components/ui/box.svelte'
  import Items from '@/components/elements/items.svelte'
  import Text from '@/components/ui/text.svelte'
  import PageHeader from '@/components/ui/page-header.svelte'
  import Description from '@/components/ui/description.svelte'
  import itemData from '@/data/items.js'
  import CharacterList from '../components/view-elements/character-list.svelte'
  import {inventory, lastAction} from '@/state/app-state.js'
  import {onMount} from 'svelte'
  import InventoryItems from '@/components/elements/inventory-items.svelte'
 
  function handleItemClick(item, index) {

    console.log(`clicked on item: ${item.name} (${item.number}).`)
    
    inventory.update(currentInventory => {
      currentInventory.items[index].number -= 1
      return currentInventory
    })

    // {
    //   // type: 'N/A',
    //   // value: 'None'
    // }

    function updateLastAction(lastKnownAction){
      return {
        type: 'USED ITEM',
        value: `${item.name} (${item.number})`
      }
    }

    lastAction.update(updateLastAction) 

  }

  onMount(() => {
    console.log('inventory: ', $inventory)
  })
</script>

<div class="page">
  <PageHeader page='Item' />

  <Description />

  <div class="items-page-container">
    <div class="characters">
      <CharacterList />
      <!-- <Box /> -->
    </div>
    <Box>
      <ul class="items-list">
      <!-- extract into own component -->
        <InventoryItems onClick={handleItemClick} />
      <!-- extract into own component -->  
      </ul>
    </Box>
  </div>
</div>

<style>

  /* extract into own component */
  /* extract into own component */

  .page {
    height: 100%;
    display: grid;
    grid-template-rows: 50px 50px 1fr;
    gap: 0;
  }

  .items-list {
    height: 100%;
  }
  
  .items-page-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
    height: 100%;
    overflow: hidden;
  }

  .characters {
    height: 100%;
  }
</style>