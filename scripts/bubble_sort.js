'use strict';
// bubble sort logic
const Bubble = function () {
  //setting time complexity
  document.getElementById('time-worst').innerText = 'O(N^2)';
  document.getElementById('time-avg').innerText = 'Θ(N^2)';
  document.getElementById('time-best').innerText = 'Ω(N)';
  //setting sapce complexity
  document.getElementById('space-worst').innerText = 'O(1)';
  delay = 0;
  for (let i = 0; i < size - 1; i++) {
    for (var j = 0; j < size - i - 1; j++) {
      divUpdate(divs[j], divSize[j], 'red');
      if (divSize[j] > divSize[j + 1]) {
        divUpdate(divs[j], divSize[j], 'orange');
        divUpdate(divs[j + 1], divSize[j + 1], 'orange');
        let temp = divSize[j];
        divSize[j] = divSize[j + 1];
        divSize[j + 1] = temp;
        divUpdate(divs[j], divSize[j], 'yellow');
        divUpdate(divs[j + 1], divSize[j + 1], 'yellow');
      }
      divUpdate(divs[j], divSize[j], 'blue');
    }
    divUpdate(divs[j], divSize[j], 'grey');
  }
  divUpdate(divs[0], divSize[0], 'grey');
  enableButtons();
};
