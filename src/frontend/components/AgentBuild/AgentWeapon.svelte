<script>
    import PStat from "./PStat.svelte";

  let { weapon } = $props();
</script>

{#if  weapon}
  

<div class="weapon">
  <div>
    <img src={weapon.icon} alt=''/>
  </div>
  <div>
    <div>
      <div>{weapon.name}</div>
      <div>Lv.{weapon.level}</div>
    </div>
    <div class='stats'>
      <PStat title={weapon.main_properties[0].property_name} final={weapon.main_properties[0].base} />
      <PStat title={weapon.properties[0].property_name} final={weapon.properties[0].base} />
    </div>
  </div>
</div>

{/if}


<style>
  .weapon {
    display: flex;
    padding: 1em 0.5em;
    gap: 0.5em;
    
    background: linear-gradient(#222222, #161616);
    border: .01rem solid #000;
    box-shadow: inset .01rem .02rem .01rem rgba(255,255,255,.1);
    border-radius: 2em;

    width: 100%;
  }

  img {
    width: 6em;
    height: 6em;
  }

  .stats {
    margin-top: 0.5em;
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    width: 100%;
  }
</style>
