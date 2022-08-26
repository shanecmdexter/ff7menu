<script>
  import Box from '@/components/ui/box.svelte'
  import Items from '@/components/elements/items.svelte'
  import Text from '@/components/ui/text.svelte'
  import PageHeader from '@/components/ui/page-header.svelte'
  import magicData from '@/data/magic.js'
  import CharacterList from '../components/view-elements/character-list.svelte'
</script>


<div class="magic-page-container">
  
  <Box>
    <Text value="Magic" fontSize="large" isLink={true} />
    <Text value="Summon" fontSize="large" isLink={true} />
    <Text value="Enemy Skill" fontSize="large" isLink={true} />
  </Box>
</div>


<PageHeader />

<div class="magic-list-container">
  <Box>
    <ul>
      <div class="magic-list">
        {#each magicData as magicName}
            <Text 
              isLink={true}
              value={magicName.magic}
              fontSize="normal"
            />
        {/each}
      </div>
    </ul>
  </Box>
</div>

<style>
  .magic-page-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    overflow: hidden;
    align-items: flex-end;
  }

  .magic-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    height: 500px;
    width: 100%;
    grid-auto-flow: row;
    grid-auto-rows: 10%;
    overflow-y: scroll;
  }

  .magic-list-container {
    display: grid;
    height: 500px;
    width: 100%;
  }
</style>