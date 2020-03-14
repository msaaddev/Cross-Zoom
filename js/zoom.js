window.browser = (function() {
	return window.browser || window.chrome;
})();

const btnValue1 = document.getElementById('1');
const btnValue2 = document.getElementById('2');
const btnValue3 = document.getElementById('3');
const btnValue4 = document.getElementById('4');
const btnValue5 = document.getElementById('5');

btnValue1.addEventListener('click', () => {
	chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
		return browser.tabs.setZoom(tabs[0].id, 2.0);
	});
});

btnValue2.addEventListener('click', () => {
	chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
		return browser.tabs.setZoom(tabs[0].id, 1.75);
	});
});

btnValue3.addEventListener('click', () => {
	chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
		return browser.tabs.setZoom(tabs[0].id, 1.5);
	});
});

btnValue4.addEventListener('click', () => {
	chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
		return browser.tabs.setZoom(tabs[0].id, 1.25);
	});
});

btnValue5.addEventListener('click', () => {
	chrome.tabs.query({ currentWindow: true, active: true }, function(tabs) {
		return browser.tabs.setZoom(tabs[0].id, 1.0);
	});
});
