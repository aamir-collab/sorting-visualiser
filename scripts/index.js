"use strict";

let arraySize = document.getElementById("arr-size");
let size = arraySize.value;
let arraySpeed = document.getElementById("arr-speed");
let buttonToGenerateArray = document.getElementById("arr-generate");

let algoButtons = document.querySelectorAll(".algo");
let arrayContainer = document.querySelector(".array_container");
let divSize = [];
let divs = [];

arrayContainer.style = "flex-direction:row";
let generateArray = function () {
  arrayContainer.innerHTML = "";
  for (let i = 0; i < size; i++) {
    divSize[i] =
      Math.floor(Math.random() * 0.5 * (arraySize.max - arraySize.min)) + 10;
    divs[i] = document.createElement("div");
    arrayContainer.appendChild(divs[i]);
    divs[i].style =
      "margin:0% 0.1%; background-color: blue; width:" +
      (100 / size - 2 * 0.1) +
      "%; height:" +
      divSize[i] +
      "%;";
  }
};
buttonToGenerateArray.addEventListener("click", generateArray);
let updateSize = function () {
  size = arraySize.value;
};
arraySize.addEventListener("input", updateSize);
window.onload = updateSize();

let restart = function () {
  for (let i = 0; i < algoButtons.length; i++) {
    algoButtons[i].disabled = true;
    arraySize.disabled = true;
    buttonToGenerateArray.disabled = true;
    arraySpeed.disabled = true;
  }
};

let runAlgo = function () {
  restart();
  switch (this.innerHTML) {
    case "Bubble":
      Bubble();
      break;
    case "Selection":
      Selection_sort();
      break;
    case "Insertion":
      Insertion();
      break;
    case "Merge":
      Merge();
      break;
    case "Quick":
      Quick();
      break;
    case "Heap":
      Heap();
      break;
  }
};
