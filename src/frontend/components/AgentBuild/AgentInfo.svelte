<script>
    import Stat from "./PStat.svelte";

  let { agent: a } = $props();
</script>

<div class='block' style:background={a.vertical_painting_color}>
  <img src={a.role_vertical_painting_url} alt='' />
</div>
<div class='agent-name'>{a.full_name_mi18n}</div>
<div class='agent-stats'>
{#each a.properties	 as stat}
  <Stat id={stat.id} title={stat.property_name} final={stat.final} />
{/each}
</div>

<style>
.block {
  display: flex;
  align-items: end;
  width: 100%;
  height: 25vh;
  border-radius: 1em 1em 0 0;
}

img {
  width: 100%;
}

.agent-name {
  background: #313131;
  font-size: 24px;
  font-weight: 800;
  border-radius: 0 0 9999px 0;
  padding: 4px 8px;
}

.agent-stats {
  margin-top: 1em;
  padding: 0.6em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(6, 1fr);
  gap: 0.4em;
}
</style>