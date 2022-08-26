<script>
  import Box from '@/components/ui/box.svelte'
  import Text from '@/components/ui/text.svelte'  
</script>

<div class="wrapper">
  <Box>
    <div class="status">

      <div class="status-item">
        <Text value="Time" color="gray" weight="lighter" fontSize="small" />
        <Text value="12:02:22" fontSize="small" />
      </div>

      <div class="status-item">
        <Text value="Gil" color="gray" weight="lighter" fontSize="small" />
        <Text value="120000" fontSize="small" />
      </div>
 
      <div class="status-item">
        <Text value="Location" color="gray" weight="lighter" fontSize="small" />
        <Text value="Costa Del Sol" fontSize="small" />
      </div>

    </div>
  </Box>
</div>

<style>
  .wrapper {
    height: 100%;
    width: 100%;
    /* position: absolute;
    left: 20px; */
    color: white;
  }

  .status {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0px;
    height: 100%;
  }
 
  .status-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    height: 100%;
    width: 100%;
    /* background: yellow; */
  }
</style>