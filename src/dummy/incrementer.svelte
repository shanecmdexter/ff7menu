<script>
  import { count } from '@/state/stores.js';

  function increment() {
    count.update(n => n + 1);
  }
</script>

<button on:click={increment}>
  Add
</button>

<style>
  button {
    border: 1px solid white;
    border-radius: 10px;;
    height: 20px;
    width: auto;
    padding: 5px;
    background-color: turquoise;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>