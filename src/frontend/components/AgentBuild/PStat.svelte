<script>
  let { id, title, normal, plus, final, procs, style = "basic" } = $props();
</script>

<div class={['default', style]}>
  <div class="title">
    {title}
    {#if plus}
      <div class="plus">+{plus}</div>
    {/if}
  </div>

  <div class="final">{final}</div>
</div>

<style type="scss">
  .default {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2px 8px;
    border-radius: 9999px;

    background: black;
    font-weight: 600;

    .title {
      font-size: 0.8em;
      display: flex;
      align-items: center;
    }

    .plus {
      color: #fcae2f;
      font-weight: 700;
    }

    .final {
      font-weight: 800;
    }
  }

  .default.disc {
    gap: 1em;
  }

  .default.big {
    font-weight: 900;
  }
</style>
