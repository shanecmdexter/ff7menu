<script>
  import Text from '@/components/ui/text.svelte'
  export let time = "";
  // export let gil = "";
</script>

<div class="time-and-gil">
  <p>{time}</p>
  <!-- <p>{gil}</p> -->
</div>

<style>

  .time-and-gil {
    display: flex;
    flex-direction: column;
  }

  p {
    padding: 0;
    margin: 0;
  }
</style>