import index from './frontend/index.html'
import userAgents from './backend/getUserAgents'
import getAgent from './backend/getAgent'

Bun.serve({
  port: 3330,
  routes: {
    '/': index,

    '/api/playerAgents/:uid': async req => {
      const uid = req.params.uid;
      const agents = await userAgents(uid)
      return Response.json(agents)
    },

    '/api/agent/:uid/:agentId': async req => {
      const uid = req.params.uid;
      const agentId = req.params.agentId
      const agent = await getAgent(uid, agentId)
      return Response.json(agent)
    }
  }
})

console.log('Started @ http://localhost:3330')