<script>
  import { userId, appState, selectedAgent } from "../../store.svelte.js";

  let agents = $state([]);
  let scrollableBlock;

  fetch(`/api/playerAgents/${$userId}`)
    .then((resp) => resp.json())
    .then((json) => {
      agents = json;
      appState.set(2);
    });

  function handleWheel(event) {
    event.preventDefault();
    scrollableBlock.scrollLeft += event.deltaY;
  }
</script>

<div class="scrollable" bind:this={scrollableBlock} onwheel={handleWheel}>
  {#each agents as agent}
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->

    <div
      class={["agent-icon", $selectedAgent == agent.id ? "active" : ""]}
      onclick={() => {
        selectedAgent.set(agent.id);
        appState.set(2);
      }}
    >
      <img src={agent.hollow_icon_path} alt="mne pohuy sps" />
    </div>
  {/each}
</div>

<style>
  .scrollable {
    overflow-x: hidden;
    display: flex;
    background-image: linear-gradient(to bottom, #313131, #252525);
    height: fit-content;
    padding: 8px 48px;
    border-radius: 9999px;
  }

  .scrollable .agent-icon:first-child {
    border-radius: 10px 0 0 10px;
  }

  .agent-icon {
    transform-origin: 50%;
    transform: skew(-25deg) translate(0.05rem);

    width: 94px;
    height: fit-content;

    padding: 4px 0 2px 2px;
    background-color: #1d1d1d;
  }

  img {
    width: inherit;
    height: inherit;
    transform-origin: 50%;
    transform: scale(1) skew(25deg) translate(-0.05rem);
  }

  .agent-icon:hover,
  .agent-icon.active {
    border-radius: 10px;
    animation: 1s infinite yellogreen alternate linear;
  }
</style>
