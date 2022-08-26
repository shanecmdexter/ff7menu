<script>
  import {defaultImage} from '@/data/avatars.js'
  export let image = defaultImage
</script>

<div class="image flex">
  <img src={image} alt="image name"/>
</div>
<style>
  .image {
    height: 50%;
    /* width: 250px; */
    border-radius: 6px; 
    border: solid thin black; 
    overflow: hidden; 
  }

  img {
    height: 110%;
  }
</style>