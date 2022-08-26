<script>
  import Box from '@/components/ui/box.svelte'
  import Text from '@/components/ui/text.svelte'

  export let magic = "";
  export let isUsable = true;
</script>

<div class="magic-container">
  <div data-isUsable={isUsable} class="magic">
    <Text value={magic} />
  </div>
</div>

<style>
  [data-isUsable="true"] {
    font-size: 20px;
    color: white;
  }

  [data-isUsable="false"] {
    font-size: 20px;
    color: #4b4949;
  }
</style>