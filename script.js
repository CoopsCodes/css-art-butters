const showButton = document.getElementById("rgbButton");
const rgbSelector = document.getElementById("rgb");

// Toggle the RGB selector
showButton.addEventListener("click", () => {
	if (rgbSelector.style.display == "block") {
		rgbSelector.style.display = "none";
	} else {
		rgbSelector.style.display = "block";
	}
});
