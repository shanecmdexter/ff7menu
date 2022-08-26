<script>
  import Text from '@/components/ui/text.svelte'
  import Space from '@/components/ui/horizontal-space.svelte'
  import Meter from '@/components/elements/meter.svelte'
  import PageName from '@/components/elements/character.svelte'

  export let lvl = 30;
  // name
  export let name = 'Character'
  // hp
  export let currentHp = 0;
  export let maxHp = 0;
  // mp
  export let currentMp = 0;
  export let maxMp = 0;
  // exp
  export let currentExp = 0;
  export let requiredExp = 0;
  // limit
  export let limitLevel = 1;
  export let currentLimitExp = 0;
  export let requiredLimitExp = 0;
</script>

<div class="info-wrapper">
  <div class="char-info">

    <div class="char-details">
      <Text value={name} fontSize="small"/>
      
      <div class="level flex jc-start ai-end">
        <Text value="Lv " fontSize="small" disabled={true} />
        <Space />
        <Text value={lvl} weight="bold" />
      </div> 
    </div>

    <div class="hp flex jc-start ai-end">
      <!-- <Text value="HP" fontSize="small" disabled={true} /> -->
      <Space />
      <Meter label="HP" current={1000} required={1000} format='ratio' />
      <!-- <Text value={`${currentHp} /${maxHp}`} /> -->
    </div>

    <div class="mp flex jc-start ai-end">
      <!-- <Text value="MP" fontSize="small" disabled={true} /> -->
      <Space />
      <Meter label="MP" current={90} required={99} format='ratio'/>
      <!-- <Text value={`${currentMp} /${maxMp}`} /> -->
    </div>

  </div>

  <div class="level-and-limit">

    <div class="level-info">

      <div class="level-bar">
        <Meter label="Next Level" current={90} required={110} format='percentage'/>
      </div>

    </div>

    <div class="limit-info">

      <div class="limit-level-progress">
        <div class="limit">
          <Meter label="Limit Level" current={60} required={200} format='percentage' />
        </div>
      </div>

    </div>

  </div>
</div>

<style>
  .char-info {
    display: grid;
    grid-gap: 10px;
    width: auto;
  }

  .char-details {
    display: flex;
    justify-content: flex-start;
    gap: 20px;
    align-items: flex-end;
  }

  .info-wrapper {
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 20px;
  }

  .level-and-limit {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 10px;
  }

</style>