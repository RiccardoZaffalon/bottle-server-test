const time = document.getElementById("time");
const container = document.querySelector(".container");
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
})

window.onload = function() {
	container.classList.add("loaded");
}
window.onbeforeunload = function() {
	container.classList.remove("loaded");
}
