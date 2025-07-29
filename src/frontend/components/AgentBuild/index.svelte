<script>
  import { onDestroy } from 'svelte';
  import { appState, userId, selectedAgent } from "../../store.svelte";
  let agent = $state({});

  let unsub = selectedAgent.subscribe((id) => {
    if(!id) return;
    console.log(`/api/agent/${$userId}/${id}`);
    fetch(`/api/agent/${$userId}/${id}`).then(resp => resp.json())
      .then(json => { agent = json });
  })

  onDestroy(() => { unsub() });

</script>

<div>
  {$appState}
  {$userId}
  {$selectedAgent}
  {JSON.stringify(agent)}
</div>