<script>
  import ViewSelector from '@/components/view-elements/view-selector.svelte'
  import Button from '@/components/elements/button.svelte'
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";


  const goBack = () => {
    // importing a list of past views
    let ff7Data = {
      views: [],
      lastUpdated: 0
    }

    let potentialData = localStorage.getItem('ff7-data')
    if(potentialData && typeof potentialData === 'string'){
      ff7Data = {
        ...JSON.parse(potentialData)
      }
    }

    console.log('views are: ', ff7Data)

    if(ff7Data.views.length > 0){
      let lastViewed = ''

      if(ff7Data.views[ff7Data.views.length - 1] === $page.path){
      // REMOVE LAST VIEW BEACUSE WE ARE ALREADY THERE
        ff7Data.views.pop()
      }
      
      // TAKE THE LAST ITEM FROM THE LIST 
      lastViewed = ff7Data.views.pop()

      console.log('last viewed: ', lastViewed)

      // save the updated data 
      localStorage.setItem('ff7-data', JSON.stringify(ff7Data))

      goto(lastViewed)
    }
  }
</script>

<nav>
  <!-- back button component -->
  <Button label="Back" onClick={goBack} />
  <!-- menu view list -->
  <ViewSelector />
</nav>

<style>
  nav {
    display: grid;
    gap: 20px;
    grid-template-columns: calc(200px + 40px) 1fr;
  }

  
</style>