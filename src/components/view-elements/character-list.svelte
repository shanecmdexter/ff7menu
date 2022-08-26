<script>
  import Box from '@/components/ui/box.svelte'
  import Character from '@/components/elements/character.svelte'
  import {cloud, tifa, squall, tidus} from '@/data/avatars.js'
  import {partyCharacters} from '@/state/app-state.js'
  // import { characters } from '@/data/characters.js'

</script>

<div class="character-list">
  <Box>
    <ul>
      {#each $partyCharacters.characters as char}
        <Character 
          character={ char }
        />
      {/each}
    </ul>
  </Box>
</div>

<style>
  .character-list {
    height: 100%;
    width: 100%; 
  }

  ul {
    height: 100%; 
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 30%);
    grid-gap: 20px; 
    align-content: center;
    align-items:  center;
  }
</style>
