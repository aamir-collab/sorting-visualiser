let speed = 1000;

const visualiseSpeed = function () {
  let arrspeed = arraySpeed.value;
  switch (parseInt(arrspeed)) {
    case 1:
      speed = 1;
      break;
    case 2:
      speed = 10;
      break;
    case 3:
      speed = 100;
      break;
    case 4:
      speed = 1000;
      break;
    case 5:
      speed = 10000;
      break;
  }
  delayTime = 10000 / (Math.floor(size / 10) * speed);
};
let delayTime = 10000 / (Math.floor(size / 10) * speed);
let delay = 0;
arraySpeed.addEventListener('input', visualiseSpeed);
const divUpdate = function (cont, height, color) {
  window.setTimeout(function () {
    cont.style =
      'margin: 0% 0.1%; width:' +
      (100 / size - 2 * 0.1) +
      '%; height:' +
      height +
      '%; background-color:' +
      color +
      ';';
  }, (delay += delayTime));
};
const enableButtons = function () {
  window.setTimeout(function () {
    for (let i = 0; i < algoButtons.length; i++) {
      algoButtons[i].disabled = false;
      arraySize.disabled = false;
      buttonToGenerateArray.disabled = false;
      arraySpeed.disabled = false;
    }
  }, (delay += delayTime));
};
