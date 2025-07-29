<script>
  let { skills } = $props();
</script>

<div class="skills">
  {#each skills as skill}
  {#if skill.skill_type != 5}
  <div class='skill'>
    <img src={`/assets/b${skill.skill_type}.png`} alt=''/>
    <div class='level'>{skill.level}</div>
  </div>
    {/if}
  {/each}
</div>


<style>
  .skills {
    display: flex;
    gap: 0.4em;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 3em;
    height: 3em;
  }

  .skill {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .level {
    position: relative;
    top: -10px;

    background: #141414;
    font-weight: 900;

    padding: 1px 6px;
    border-radius: 9999px;
  }
</style>