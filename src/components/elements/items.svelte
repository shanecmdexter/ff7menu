<script>
  import Box from '@/components/ui/box.svelte'
  import Text from '@/components/ui/text.svelte'
  export let itemName = "";
  export let itemQuantity = "";
  export let hasItemImage = true;
</script>

<li class="items-page-container">
  <div class="item-list">
    <div class="item">
      <div data-hasItemImage={hasItemImage} class="item-image"></div>
      <!-- <li>{itemName}</li> -->
      <Text value={itemName} />
    </div>
    <!-- <div class="item-quantity">
      <Text value={itemQuantity} />
    </div> -->
  </div>
</li>


<style>
  .items-page-container {
    display: flex;
    flex-direction: column;
    list-style: none;
    font-size: 20px;
    height: auto;
    padding-left: 40px;
    padding-top: 10px;
    margin: 0;
  }

  .item {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  [data-hasItemImage="true"] {
    border-radius: 50px;
    background-color: grey;
    height: 18px;
    width: 18px;
  }

  [data-hasItemImage="false"] {
    border-style: none;
  }

  .item-list {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 360px;
    justify-content: space-between;
  }
</style>