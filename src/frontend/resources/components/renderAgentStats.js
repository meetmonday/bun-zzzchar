const template = (a) => {
  return `
  <div>
    <h1>${a.full_name_mi18n}</h1>
  </div>

  <div class='bg-block'>
    ${renderProperties(a.properties)}
  </div>

  <div class='bg-block disks'>
    ${renderDisks(a.equip)}
  </div>
  `
}

const renderProperties = (props) => {
  return props.map((prop) => {
    return `
    <div class='prop'>
      <span class='propName'>${prop.property_name}</span>
      <span class='propFinal'>${prop.final}</span>
    </div>`
  }).join('')
}

const renderDisks = (discs) => {
  return discs.map(disk => {
    return `
    <div class='flex'>
      <img src='${disk.icon}' class='disk'/>
      <div>
        ${disk.name}
        <div class='prop'>
          <span class='propName'>${disk.main_properties[0].property_name}</span>
          <span class='propFinal'>${disk.main_properties[0].base}</span>
        </div>
        ${renderDiskProps(disk.properties)}
      </div>
    </div>
    `
  }).join('')
}

const renderDiskProps = (props) => {
  return props.map(stat => {
    return `
    <div class='prop'>
      <span class='propName'>
        ${stat.property_name}
        <span class='procs'>${stat.add ? '+'+stat.add : ''}</span>
      </span>
      <span class='propFinal'>${stat.base}</span>
    </div>
    `
  }).join('')
}

const renderAgent = async (uid, id) => {
  console.log(uid, id)
  const data = await fetch(`/api/agent/${uid}/${id}`)
  const agent = await data.json()

  const element = document.getElementById('build')
  element.innerHTML = template(agent)

  element.style.backgroundImage = `url(${agent.role_vertical_painting_url})`
  element.style.backgroundColor = agent.vertical_painting_color
}

export default renderAgent;