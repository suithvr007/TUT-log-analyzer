import { state } from './state.js';

/**
 * Parses log text and updates global state
 * @param {string} text - content of log file
 */
export function parseLogs(text) {
  const lines = text.split('\n');

  lines.forEach((line, index) => {
    // --- Detect errors ---
    if (/FATAL EXCEPTION|java\.lang\.|ANR|StagingProgress.*EXCEPTION/i.test(line)) {
      const timeMatch = line.match(/\d{2}:\d{2}/);
      const time = timeMatch ? timeMatch[0] : "NA";

      const module = line.split('/')[0] || "unknown";

      state.errors.push({ line, index, time, module });

      // update timeline counts
      state.timeline[time] = (state.timeline[time] || 0) + 1;

      // update module counts
      state.modules[module] = (state.modules[module] || 0) + 1;
    }
  });
}
