import { state } from './state.js';

export function renderLogs(filter = "") {
  const out = document.getElementById("logOutput");
  out.innerHTML = "";

  state.errors
    .filter(e => e.line.toLowerCase().includes(filter.toLowerCase()))
    .forEach(e => {
      const div = document.createElement("div");
      div.textContent = e.line;
      out.appendChild(div);
    });
}
