<script>
    import User from "./User.svelte";
    import Agents from "./Agents.svelte";

    let userId = $state(1503990001);
    let touchedGet = $state(false)

</script>

<div class='header'>
  <User bind:userId bind:touchedGet />
  {#if touchedGet}
    <Agents {userId} />
  {/if}
</div>

<style>
.header {
  background: gray;
  display: flex;
  gap: 10px;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
}
</style>