<script>
  export let limitBreakBar = "";
</script>

<div class="limit-level-bar">
  <div class="limit-progress">
    {limitBreakBar}
  </div>
</div>

<style>
  .limit-level-bar {
    border: 2px solid white;
    width: 150px;
    height: 15px;
    background-color: grey;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 10;
  }

  .limit-progress {
    width: 100px;
    height: 100%;
    background-color: pink;
  }
</style>


