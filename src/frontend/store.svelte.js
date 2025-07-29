import { writable } from 'svelte/store';

// 0 - uid empty or not loading
// 1 - uid here, agents loading
// 2 - uid, agents list ready
export const appState = writable(0);

export const userId = writable(1503990001);

export const agents = writable([]);

// id of agent
export const selectedAgent = writable();

export const agentStats = writable();