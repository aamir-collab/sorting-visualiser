const Insertion = function () {
  document.getElementById('time-worst').innerText = 'O(N^2)';
  document.getElementById('time-avg').innerText = 'Θ(N^2)';
  document.getElementById('time-best').innerText = 'Ω(N)';
  document.getElementById('space-worst').innerText = 'O(1)';
  delay = 0;
  for (let j = 0; j < size; j++) {
    divUpdate(divs[j], divSize[j], 'yellow');
    let key = divSize[j];
    let i = j - 1;
    while (i >= 0 && divSize[i] > key) {
      divUpdate(divs[i], divSize[i], 'red');
      divUpdate(divs[i + 1].divSize[i + 1], 'red');
      divSize[i + 1] = divSize[i];
      divUpdate(divs[i], divSize[i], 'red');
      divUpdate(divs[i + 1], divs[i + 1], 'red');
      divUpdate(divs[i], divSize[i], 'blue');
      if (i == j - 1) {
        divUpdate(divs[i + 1], divSize[i + 1], 'yellow');
      } else {
        divUpdate(divs[i + 1], divSize[i + 1], 'blue');
      }
      i -= 1;
    }
    divSize[i + 1] = key;
  }
};
