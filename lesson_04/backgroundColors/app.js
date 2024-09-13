document.querySelector("#turnRed").addEventListener("click", turnRedFunction);
document.querySelector("#blue").addEventListener("click", turnBlueFunction);
document.querySelector("#turnPurple").addEventListener("click", turnPurpleFunction);

function turnRedFunction() {
  document.querySelector("body").style.backgroundColor = "red";
}

function turnBlueFunction() {
  document.querySelector("#blue").style.backgroundColor = "blue";
}

function turnPurpleFunction() {
  document.querySelector("body").style.backgroundColor = "purple";
}
