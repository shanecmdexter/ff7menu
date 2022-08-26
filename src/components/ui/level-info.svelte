<script>
  export let level = "";
</script>

<div class="level-bar">
  <div class="level-progress">
    {level}
  </div>
</div>

<style>
  .level-bar {
    border: 2px solid white;
    width: 150px;
    height: 15px;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 10;
  }

  .level-progress {
    width: 30px;
    height: 100%;
    background-color: rgb(187, 127, 137);
  }
</style>