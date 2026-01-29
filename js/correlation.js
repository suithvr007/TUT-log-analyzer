import { state } from './state.js';

export function correlateCrashes() {
  return state.errors.map(e => `Crash at ${e.time} in ${e.module}`);
}
