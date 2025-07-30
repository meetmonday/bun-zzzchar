import index from './src/index.html'
import userAgents from './src/backend/getUserAgents'
import getAgent from './src/backend/getAgent'

Bun.serve({
  port: 3330,
  routes: {
    '/': index,

    '/api/playerAgents/:uid': async req => {
      const uid = req.params.uid;
      const cookies = await req.text();

      const agents = await userAgents(uid, cookies)
      return Response.json(agents)
    },

    '/api/agent/:uid/:agentId': async req => {
      const uid = req.params.uid;
      const agentId = req.params.agentId
      const cookies = await req.text();

      const agent = await getAgent(uid, agentId, cookies)
      return Response.json(agent)
    },
  },
  async fetch(req) {
    const path = new URL(req.url).pathname;
    const file = Bun.file('.' + path);
    return new Response(file);
  }
})

console.log('Started @ http://localhost:3330')