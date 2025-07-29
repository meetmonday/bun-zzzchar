<script>
    import PStat from "./PStat.svelte";

  let { disc, index } = $props();
</script>


<div class='flexdisc'>
  <div class='discimg'>
    <img src={disc.icon} alt=''/>
  </div>
  <div class='stats'>
    <PStat title={disc.main_properties[0].property_name} final={disc.main_properties[0].base} style='big'/>
    {#each disc.properties as prop}
      <PStat title={prop.property_name} final={prop.base} plus={prop.add} style='disc' />
    {/each}
  </div>
</div>

<style>
  .flexdisc {
    display: flex;
    border-radius: 100px 10px 10px 100px;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px 0 0;

    background: linear-gradient(#222222, #161616);
    border: .01rem solid #000;
    box-shadow: inset .01rem .02rem .01rem rgba(255,255,255,.1);
  }

  .stats {
    display: flex;
    flex-direction: column;
    gap: 0.2em;
    width: 100%;
  }

  .discimg {
    margin: 10px;
    box-sizing: content-box;
  }

  img {
    width: 9em;
    height: 9em;
    display: block;
  }
</style>