import renderAgent from './renderAgentStats';


const render = async (id) => {
  const element = document.getElementById(id);

  const data = await fetch('/api/playerAgents/0')
  const agents = await data.json()

  let html = ''

  agents.forEach(agent => {
    html += `
    <img 
      src='${agent.hollow_icon_path}'
      data-agent-id='${agent.id}'
      class='agent-icon'
    />
    `
  });

  element.innerHTML = html

  element.addEventListener('wheel', (event) => {
    event.preventDefault();
    element.scrollLeft += event.deltaY;
  });

  document.querySelectorAll('.agent-icon').forEach(img => {
    img.addEventListener('click', function () {
      const agentId = this.getAttribute('data-agent-id');
      console.log(agentId)
      renderAgent(0, agentId);
    });
  });
}

export default render;