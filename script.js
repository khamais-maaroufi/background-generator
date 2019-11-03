var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var cs = document.querySelector("h3");
var b = document.querySelector("body");

function gradient(){
	b.style.background = "linear-gradient(to right,"+input1.value+", "+input2.value+")";

	cs.textContent = b.style.background + ";";
}

input1.addEventListener("input",gradient);

input2.addEventListener("input",gradient);

