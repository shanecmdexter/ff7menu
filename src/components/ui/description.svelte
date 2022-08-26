<script>
  import Box from '@/components/ui/box.svelte'
  import Text from '@/components/ui/text.svelte'
  
  export let description = "";
</script>
  
  <div class="description">
    <Box>
      {description}
    </Box>
  </div>
  
  <style>
    .description {
      width: 100%;
      height: 50px;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  </style>