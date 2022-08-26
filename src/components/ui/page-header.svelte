<script>
  import Box from '@/components/ui/box.svelte'
  import Text from '@/components/ui/text.svelte'
  
  export let header = "";
  export let page = "";
</script>

<Box>
  {header}
  {#if page === 'Item'}
    <div class="item-header">
      <div class="page-name">
        <Text value="ITEM" />
      </div>
      <div class="item-actions">
        <div class="header-text">
          <Text value="Use" isLink={true} />
        </div>
        <div class="header-text">
          <Text value="Arrange" isLink={true} />
        </div>
        <div class="header-text">
          <Text value="Key Items" isLink={true} />
        </div>
      </div>
    </div>
  {:else if page === 'Magic'}
    <div class="page-name">
      <Text value="Magic" />
    </div>
  {/if}
</Box>

<style>
  .page-header {
    width: 100%;
    height: 50px;
  }

  .page-name {
    height: 50px;
    width: 100px;
    text-align: center;
  }

  .item-header {
    display: grid;
    grid-template-columns: 500px 500px;
    align-items: center;
  }

  .item-actions {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 500px;
    position: relative;
    bottom: 15px;
  }
</style>