import { parseLogs } from './parser.js';
import { renderTimelineHeatmap } from './heatmap.js';
import { renderModuleHeatmap } from './moduleHeatmap.js';
import { renderLogs } from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
  const analyzeBtn = document.getElementById("analyzeBtn");
  const fileInput = document.getElementById("logFile");
  const searchBox = document.getElementById("searchBox");

  if (!analyzeBtn) {
    console.error("Analyze button not found");
    return;
  }

  // --- Handle Analyze click ---
  analyzeBtn.addEventListener("click", async () => {
    if (!fileInput.files.length) {
      alert("Please select one or more log files");
      return;
    }

    for (const file of fileInput.files) {
      const text = await file.text();
      parseLogs(text);
    }

    // Render charts and logs
    renderTimelineHeatmap();
    renderModuleHeatmap();
    renderLogs();
  });

  // --- Search box filter ---
  searchBox.addEventListener("input", e => {
    renderLogs(e.target.value);
  });
});
