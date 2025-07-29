<script>
    import AgentDiscs from "./AgentDiscs.svelte";
    import AgentInfo from "./AgentInfo.svelte";

  let { agent } = $props()
</script>

<div class='card'>
  <div class='col1'>
    <AgentInfo {agent} />
  </div>
  <div class='col2'>
    blablabla
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
  display: grid;
  grid-template-columns: repeat(3, 24vw);
}

.col1 {
  width: 24vw;
  background: #161616;
  border-radius: 1em;
}

.col2 {
  width: 24vw;
  background: #161616;
}

.col3 {
  width: 200%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>