import { state } from './state.js';
import { renderBar } from './charts.js';

export function renderModuleHeatmap() {
  renderBar(
    'moduleHeatmap',
    Object.keys(state.modules),
    Object.values(state.modules)
  );
}
