<script>
	import Header from './components/Header/index.svelte';
	import AgentBuild from './components/AgentBuild/index.svelte';
    import { appState } from './store.svelte';
    import Cookies from './Cookies.svelte';

</script>

<div>
  <Header />
  <AgentBuild />

  {#if $appState == -1}
    <Cookies />
  {/if}
</div>

<style>

</style>