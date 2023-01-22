const Quick = function () {
  document.getElementById('time-worst').innerText = 'O(N^2)';
  document.getElementById('time-avg').innerText = 'Θ(N log N)';
  document.getElementById('time-best').innerText = 'Ω(N log N)';

  //Setting Space complexity
  document.getElementById('space-worst').innerText = 'O(log N)';
  delay = 0;
  quick_sort(0, size - 1);
  enableButtons();
};
const quick_partition = function (start, end) {
  let i = start + 1;
  let piv = divSize[start];
  divUpdate(divs[start], divSize[start], 'yellow');
  for (let j = start + 1; j <= end; j++) {
    if (divSize[j] < piv) {
      divUpdate(divs[j], divSize[j], 'yellow');
      divUpdate(divs[i], divSize[i], 'red');
      divUpdate(divs[j], divSize[j], 'red');
      let temp = divSize[i];
      divSize[i] = divSize[j];
      divSize[j] = temp;
      divUpdate(divs[i], divSize[i], 'red');
      divUpdate(divs[j], divSize[j], 'red');
      divUpdate(divs[i], divSize[i], 'blue');
      divUpdate(divs[j], divSize[j], 'blue');
      i += 1;
    }
  }
  divUpdate(divs[start], divSize[start], 'red');
  divUpdate(divs[i - 1], divSize[i - 1], 'red');
  let temp = divSize[start];
  divSize[start] = divSize[i - 1];
  divSize[i - 1] = temp;
  divUpdate(divs[start], divSize[start], ' red');
  divUpdate(divs[i - 1], divSize[i - 1], ' red');
  for (let t = start; t <= i; t++) {
    divUpdate(divs[t], divSize[t], 'green');
  }
  return i - 1;
};
const quick_sort = function (start, end) {
  if (start < end) {
    let piv_position = quick_partition(start, end);
    quick_sort(start, piv_position, -1);
    quick_sort(piv_position + 1, end);
  }
};
