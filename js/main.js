
import { parseFile } from "./parser.js";
import { renderErrorChart } from "./charts.js";
import { renderTimelineHeatmap } from "./heatmap.js";
import { renderModuleHeatmap } from "./moduleHeatmap.js";
import { renderCrashCorrelation } from "./correlation.js";
import { renderGroupedCrashes } from "./ui.js";
import { state } from "./state.js";

document.getElementById("analyzeBtn").onclick = () => {
  Object.assign(state.errorCounts, { Crash:0, ANR:0, StageNow:0 });
  state.timelineBuckets = {};
  state.timelineLogs = {};
  state.moduleHeatmap = {};
  state.crashCorrelations = [];
  state.crashGroups = {};

  const files = document.getElementById("logFile").files;
  let done = 0;

  [...files].forEach(f => {
    const r = new FileReader();
    r.onload = e => {
      parseFile(f, e.target.result);
      if (++done === files.length) {
        renderErrorChart();
        renderTimelineHeatmap();
        renderModuleHeatmap();
        renderCrashCorrelation();
        renderGroupedCrashes();
      }
    };
    r.readAsText(f);
  });
};
