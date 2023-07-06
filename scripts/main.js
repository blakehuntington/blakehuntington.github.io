const myImage = document.querySelector("img");

let myButton = document.querySelector("button");
let Heading = document.querySelector("h1");
let Body = document.querySelector("body");
let Background = document.querySelector("html");

myImage.onclick = () => {
	const myImageSrc = myImage.getAttribute("src");
	if (myImageSrc === "images/paper-plane.png") { /* If the plane is pink: */
		myImage.setAttribute("src", "images/paper-plane-2.png");
		Heading.setAttribute("style", "color:#0c2e8d;");
		Body.setAttribute("style", "background-color:#ebedf4;")
		Background.setAttribute("style", "background-color:#a8b4cf;");
	} else { /* If the plane is blue: */
		myImage.setAttribute("src", "images/paper-plane.png");
		Heading.setAttribute("style", "color:#ef5261;");
		Body.setAttribute("style", "background-color:#fcd3d6;");
		Background.setAttribute("style", "background-color:#fbb5bb;");
	}
};

myButton.onclick = () => {
	setUserName();
};

function setUserName() {
	const myName = prompt("Please enter your name.");
	if (!myName) {
		setUserName();
	} else {
		localStorage.setItem("name", myName);
		Heading.textContent = `Don't you just love paper airplanes, ${myName}?`;
	}
};

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	Heading.textContent = `Don't you just love paper airplanes, ${storedName}?`;
};