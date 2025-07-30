<script>
    import { appState } from "./store.svelte";


let cookies = $state();
const saveCookies = () => {
  localStorage.setItem('cookies', cookies);
  appState.set(0);
}

</script>

<div>
  <label for='ht'>Enter Hoyolab Cookies string</label>
  <input name=ht bind:value={cookies} placeholder='Without "Cookie: "'/>
  <button onclick={saveCookies}>Save</button>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 4em;
  }

  button, input {
    padding: 10px;
  }
</style>