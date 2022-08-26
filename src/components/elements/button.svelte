<script>
  import Box from '@/components/ui/box.svelte'
  import Text from '@/components/ui/text.svelte'
  export let label = 'Button'
  export let onClick

  function handleClick(){
    if(onClick){
      onClick()
    }
    else{
      console.log('clicked on button: ', label)
    }
  }
</script>

<Box padding='0px' >
  <button on:click={handleClick}>
    <Text value={label} />
  </button>
</Box>

<style>
  button {
    height: 100%;
    width: 100%;
  }
</style>