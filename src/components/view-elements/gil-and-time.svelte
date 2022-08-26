<script>
  import Box from '@/components/ui/box.svelte'
  import Text from '@/components/ui/text.svelte'
  import TimeAndGil from '@/components/ui/currency-and-progress.svelte'
  import Gil from '@/components/ui/gil.svelte'
</script>

<div class="gil-and-time">
  <Box>
    <div class="time-and-gil">
      <div class="progress">
        <Text value="Time" />
        <TimeAndGil time="12:02:22"/>
      </div>

      <div class="current-gil">
        <Text value="Gil" />
        <Text value="120000" />
      </div>
    </div>
  </Box>
</div>

<style>
  .gil-and-time {
    height: auto;
    width: 300px;
    position: absolute;
    right: 20px;
    bottom: 65px;
    color: white;
  }

  .time-and-gil {
    display: flex;
    flex-direction: column;
  }

  .progress {
    display: flex;
  }
  
  .current-gil {
    display: flex;
  }
</style>