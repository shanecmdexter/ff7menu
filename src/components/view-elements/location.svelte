<script>
  import Box from '@/components/ui/box.svelte'
  import Location from '@/components/ui/location-name.svelte'
</script>

<div class="location">
  <Box>
    <Location locationName="Costa Del Sol"/>
  </Box>
</div>

<style>
.location {
  width: 500px;
  height: auto;
  position: absolute;
  bottom: 20px;
  right: 20px;
}
    
</style>