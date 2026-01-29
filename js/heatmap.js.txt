import { state } from './state.js';
import { renderBar } from './charts.js';

export function renderTimelineHeatmap() {
  renderBar(
    'timelineHeatmap',
    Object.keys(state.timeline),
    Object.values(state.timeline)
  );
}
