const Selection_sort = function () {
  document.getElementById('time-worst').innerText = 'O(N^2)';
  document.getElementById('time-avg').innerText = 'Θ(N^2)';
  document.getElementById('time-best').innerText = 'Ω(N^2)';
  document.getElementById('space-worst').innerText = 'O(1)';
  delay = 0;
  for (let i = 0; i < size - 1; i++) {
    divUpdate(divs[i], divSize[i], 'red');
    index_min = i;
    for (let j = i + 1; j < size; j++) {
      divUpdate(divs[j], divSize[j], 'yellow');
      if (divSize[j] < divSize[index_min]) {
        if (index_min != i) {
          divUpdate(divs[index_min], divSize[index_min], 'blue');
        }
        index_min = j;
        divUpdate(divs[index_min], divSize[index_min], 'red');
      } else {
        divUpdate(divs[j], divSize[j], 'blue');
      }
    }
    if (index_min != i) {
      let temp = divSize[index_min];
      divSize[index_min] = divSize[i];
      divSize[i] = temp;
      divUpdate(divs[index_min], divSize[index_min], 'red');
      divUpdate(divs[i], divSize[i], 'red');
      divUpdate(divs[index_min], divSize[index_min], 'blue');
    }
    divUpdate(divs[i], divSize[i], 'green');
  }
  divUpdate(divs[i], divSize[i], 'green');
  enableButtons();
};
