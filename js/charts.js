export function renderBar(canvasId, labels, data) {
  new Chart(document.getElementById(canvasId), {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        data,
        backgroundColor: 'rgba(52,152,219,0.7)'
      }]
    },
    options: { responsive: true }
  });
}

