<script>
  import Box from '@/components/ui/box.svelte'
  import Text from '@/components/ui/text.svelte'
  import {addToViews} from '@/logic/save'
  import {goto} from '$app/navigation'
  import { page } from "$app/stores";
  import {lastAction} from '@/state/app-state'

  function goToView(path){
    goto(path)
  }
  
  const views = [
    {name: 'Item', path: '/item', description: 'View items'},
    {name: 'Magic', path: '/magic', description: 'View magic'},
    {name: 'Materia', path: '/materia', description: 'View materia'},
    {name: 'Equip', path: '/equip', description: 'View equipment'},
    {name: 'Status', path: '/status', description: 'View character status'},
    {name: 'Order', path: '/order', description: 'Change character order'},
    {name: 'Limit', path: '/limit', description: 'View and change character limit break'},
    {name: 'Order', path: '/order', description: 'Change character order'},
    {name: 'Config', path: '/config', description: 'Adjust game configuration'},
    {name: 'PHS', path: '/phs', description: 'Change party', disabled: true},
    {name: 'Save', path: '/save', description: 'Save your game', disabled: true},
  ]

  function onClick(viewName, viewPath){
    if($page.path !== viewPath){
      goToView(viewPath)
      addToViews(viewPath)

      // let newLastAction = {
      //   type: 'NAV',
      //   value: viewPath
      // }

      // lastAction.set(newLastAction)
    }
    else{
      alert('We are already on ', viewPath)
    }
  }

</script>

<div class="view-selector-list"> 
  <Box>
    <ul>
      {#each views as view}

        <li class="flex">
          {#if view.hide}
            <div class="is-hidden"></div>
          {:else}
            <Text
              isLink={true}
              value={view.name} 
              onClick={() => onClick(view.name, view.path)}
              disabled={view.disabled} 
            />
          {/if}
        </li>

      {/each}
    </ul>
  </Box>
</div>

<style>
  .view-selector-list {
    height: 100%;
    width: 100%;
  }

  ul {
    display: grid;
    /* grid-template-columns: repeat(); */
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    justify-content: flex-end;
    grid-gap: 15px;
    margin: 0;
    height: 100%;
    padding: 10px;
  }

  li {
    width: fit-content;
    height: 100%;
    justify-content: flex-start;
  }

  .is-hidden {
    height: 50px;
  }

</style>
