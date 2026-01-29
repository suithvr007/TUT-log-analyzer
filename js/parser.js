import { state } from './state.js';

export function parseLogs(text) {
  const lines = text.split('\n');

  lines.forEach((line, index) => {
    if (/FATAL EXCEPTION|ANR|StagingProgress.*EXCEPTION/i.test(line)) {
      const time = line.match(/\d{2}:\d{2}/)?.[0] || "NA";
      const module = line.split('/')[0] || "unknown";

      state.errors.push({ line, index, time, module });

      state.timeline[time] = (state.timeline[time] || 0) + 1;
      state.modules[module] = (state.modules[module] || 0) + 1;
    }
  });
}
