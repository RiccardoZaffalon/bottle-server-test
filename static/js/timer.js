const time = document.getElementById("time");
let ampm = true;

setInterval(update, 1000);

function update() {
	let date = new Date();
	let h;
	if (ampm) {
		h = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
	} else {
		h = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	}
	let m = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	time.textContent = `${h}:${m}`;
}

time.addEventListener("click", () => {
	ampm = !ampm;
	update();
	chrome.storage.sync.set({ ampm: ampm }, function() {
		// Notify that we saved.
		console.log("Settings saved");
	});
});

window.onload = function() {
	document.querySelector(".container").classList.add("loaded");
};
window.onbeforeunload = function() {
	document.querySelector(".container").classList.remove("loaded");
};