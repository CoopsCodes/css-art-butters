const showButton = document.getElementById("rgbButton");
const rgbSelector = document.getElementById("rgb");
const articleSelector = document.getElementById("item-select");

// const opt = document.getElementsByTagName("option")[articleSelector].value;
//

// Toggle the RGB selector
showButton.addEventListener("click", () => {
	if (rgbSelector.style.display == "block") {
		rgbSelector.style.display = "none";
	} else {
		rgbSelector.style.display = "block";
	}
});

articleSelector.addEventListener("change", (e) => {
	document.getElementById("selectedItem").innerHTML = articleSelector.value;
});
