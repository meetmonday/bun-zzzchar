<script>
  import { appState, userId } from "../../store.svelte";
</script>

<div class='user'>
{#if !$appState}
<div class='inline'>
  <img src='/assets/avatar.webp' alt='' class='avatar'/>
  <input placeholder="Enter UID" bind:value={$userId}/>
  <button onclick="{ () => appState.set(1) }">Get</button>
</div>
  
{:else}
<div class='inline'>
  <img src='/assets/avatar.webp' alt='' class='avatar'/>
  <h1>{$userId}</h1>
  <button onclick="{ () => appState.set(0) }">Reset</button>
</div>
{/if}
</div>

<style>
  .user {
    border-radius: 9999px;
    max-height: 100%;
    width: 30vw;
    padding: 16px 20px;
    box-sizing: border-box;

    background: linear-gradient(#222222, #161616);
    border: .01rem solid #000;
    box-shadow: inset .01rem .02rem .01rem rgba(255,255,255,.1);
  }

  .avatar {
    max-height: 48px;
    max-width: 48px;
  }

  .inline {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    gap: 1em;
  }

  button {
    padding: 4px 24px;
  }
</style>