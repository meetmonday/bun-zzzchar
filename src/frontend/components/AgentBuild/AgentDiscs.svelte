<script>
  import PDisc from "./PDisc.svelte";

  let { discs } = $props();
</script>

<div class="diskGrid">
  {#each discs as disc, index}
    <div class={`disc${index + 1}`}>
      <PDisc {disc} {index} />
    </div>
  {/each}
</div>

<style>
  .diskGrid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, auto);
    gap: 1em;
  }

  .disc1 {
    grid-column: 1;
    grid-row: 1;
  }

  .disc2 {
    grid-column: 1;
    grid-row: 2;
  }

  .disc3 {
    grid-column: 1;
    grid-row: 3;
  }

  .disc4 {
    grid-column: 2;
    grid-row: 3;
  }

  .disc5 {
    grid-column: 2;
    grid-row: 2;
  }

  .disc6 {
    grid-column: 2;
    grid-row: 1;
  }
</style>
