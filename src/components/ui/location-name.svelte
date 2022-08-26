<script>
  import Text from '@/components/ui/text.svelte'
  export let locationName = "";
</script>

<div class="location">
  <p>{locationName}</p>
</div>

<style>
  .location {
    color: white;
  }
</style>