// Theme Switch
let checkbox = document.getElementById("lightchange");
let body = document.getElementById("body");
function toggleTheme() {
	if (localStorage.getItem("light") === "true") {
		body.classList.add("light");
		checkbox.checked = true;
	} else {
		body.classList.remove("light");
		checkbox.checked = false;
	}
}
checkbox.addEventListener("change", function () {
	localStorage.setItem("light", this.checked);
	toggleTheme();
});
toggleTheme();
// Auto Type Job Role
document.addEventListener("DOMContentLoaded", function () {
  	var typed = new Typed(".autotype", {
    strings: [
      "Front-end Developer",
      "Python Programmer",
      "Machine Learning Engineer",
      "Java Programmer",
    ],
    typeSpeed: 75,
    backSpeed: 85,
    loop: true,
  	});
});
// Menu Bar (Tablet View & Mobile View)
let x = document.getElementById("open-nav");
function myFunction() {
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}
document.addEventListener("click", function (e) {
  if (e.target.id !== "abc")
    x.style.display = "none";
});
