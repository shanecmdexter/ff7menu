<script>
  import Box from '@/components/ui/box.svelte'
  import Items from '@/components/elements/items.svelte'
  import Text from '@/components/ui/text.svelte'

  import Incrementer from '@/dummy/incrementer.svelte'
  import { count } from '@/state/stores.js'

  let countValue;

  count.subscribe(value => {
    countValue = value;
  });

</script>


<div class="materia-wrapper">

  <Box>
    <Text value="Materia"
    />

    <div class="materia">
      <Text value='The number of materia in possession is {countValue}' />
    </div>

    <Incrementer />
  </Box>

</div>

<style>
  .materia-wrapper {
    height: 100%;
  }
</style>