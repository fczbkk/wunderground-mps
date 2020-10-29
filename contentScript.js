const observer = new MutationObserver(mutations => {
	for (const mutation of mutations) {
		mutation.target.textContent = mutation.target.textContent.replace(/([\d.]+) km\/h/, function (match, kph) {
			return (Math.round(kph / 3.6 * 10) / 10) + ' m/s';
		});
	}
});
setInterval(() => {
	// After adding more data to history, new callout-texts are created.
	for (const el of document.querySelectorAll('.callout-text')) {
		observer.observe(el, {childList: true});
	}
}, 1000);
