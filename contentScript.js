const speedObserver = new MutationObserver(mutations => {
  for (const mutation of mutations) {
    mutation.target.textContent = mutation.target.textContent.replace(/([\d.]+) km\/h/, function (match, kph) {
      return (Math.round(kph / 3.6 * 10) / 10) + ' m/s';
    });
  }
});

const bodyObserver = new MutationObserver(() => {
  for (const el of document.querySelectorAll('.callout-text')) {
    speedObserver.observe(el, {childList: true});
  }
});

bodyObserver.observe(document.body, {childList: true})
