const renderAgent = async (uid, id) => {
  console.log(uid, id)
  const data = await fetch(`/api/agent/${uid}/${id}`)
  const agent = await data.json()

  const element = document.getElementById('build')
  element.innerHTML = agent.full_name_mi18n

  element.style.backgroundImage = `url(${agent.role_vertical_painting_url})`

}

export default renderAgent;