<script>
    import AgentDiscs from "./AgentDiscs.svelte";
    import AgentInfo from "./AgentInfo.svelte";
    import AgentLetters from "./AgentLetters.svelte";
    import AgentSkills from "./AgentSkills.svelte";
    import AgentWeapon from "./AgentWeapon.svelte";

  let { agent } = $props()
</script>

<div class='card'>
  <div class='col1'>
    <AgentInfo {agent} />
  </div>
  <div class='col2'>
    <AgentLetters skill={agent.skills[4].level}/>
    <AgentSkills skills={agent.skills} />
    <AgentWeapon weapon={agent.weapon} />
  </div>
  <div class='col3'>
    <AgentDiscs discs={agent.equip} />
  </div>
</div>

<style>
.card {
  margin: 10px;
  /* background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAIAAABvrngfAAAASklEQVQImU3MIRYAIQzE0EnLAwP3PyyFWYFZGfEDYFtSRACSAui9vxhjSMqIWGvde6uqqmwnMOfMzIg459hOSc+21oC9N5L+b9sfpfAblcYAM+YAAAAASUVORK5CYII=); */
  min-height: 80vh;
  border-radius: 1em;
  display: flex;
  /* grid-template-columns: repeat(3, 24vw); */
  padding: 0 1em;
  gap: 2em;
  align-items: center;
}

.col1 {
  width: 24vw;
  /* background: #161616; */
  border-radius: 1em 0 0 1em;
}

.col2 {
  width: 24vw;
  /* background: #161616; */
  display: flex;
  flex-direction: column;
  align-items: center;

}

.col3 {
  width: 44vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>