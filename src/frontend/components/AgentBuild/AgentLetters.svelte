<script>
  let { skill } = $props();
</script>

<div class="container">
    <img src={`/assets/letters/${skill}.png`} alt='' />
</div>

<style>

  .container {
    padding: 1em;
  }

  img {
    width: calc(24vw - 1em);
  }
</style>
