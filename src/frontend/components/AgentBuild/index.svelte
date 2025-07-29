<script>
  import { onDestroy } from 'svelte';
  import { appState, userId, selectedAgent } from "../../store.svelte";
    import Card from './Card.svelte';
  let agent = $state({});

  let unsub = selectedAgent.subscribe((id) => {
    if(id == undefined) return;
    console.log(`/api/agent/${$userId}/${id}`);
    fetch(`/api/agent/${$userId}/${id}`).then(resp => resp.json())
      .then(json => { agent = json; appState.set(3) });
  })

  onDestroy(() => { unsub() });

</script>

<div>
  {#if $appState != 3}
    Select Agent
  {:else}
    <Card {agent} />
  {/if}
</div>