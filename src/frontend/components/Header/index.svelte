<script>
    import User from "./User.svelte";
    import Agents from "./Agents.svelte";
    import { appState } from '../../store.svelte.js'
</script>

<div class='header'>
  <User />
  {#if $appState > 0 }
    <Agents />
  {/if}
</div>

<style>
.header {
  /* background: gray; */
  display: flex;
  gap: 2em;
  padding: 1em;
  align-items: center;
  justify-content: space-between;
}
</style>