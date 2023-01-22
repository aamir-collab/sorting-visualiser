const Heap = function () {
  document.getElementById('time-worst').innerText = 'O(N log N)';
  document.getElementById('time-avg').innerText = 'Θ(N log N)';
  document.getElementById('time-best').innerText = 'Ω(N log N)';
  document.getElementById('space-worst').innerText = 'O(1)';
  delay = 0;
  heap_sort();
  enableButtons();
};
const swap = function (i, j) {
  divUpdate(divs[i], divSize[i], 'red');
  divUpdate(divs[j], divSize[j], 'red');
  let temp = divSize[i];
  divSize[i] = divSize[j];
  divSize[j] = temp;
  divUpdate(divs[i], divSize[i], 'red');
  divUpdate(divs[j], divSize[j], 'red');
  divUpdate(divs[i], divSize[i], 'blue');
  divUpdate(divs[j], divSize[j], 'blue');
};
const max_heapify = function (n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;
  if (l < n && divSize[l] > divSize[largest]) {
    if (largest != i) {
      divUpdate(divs[largest], divSize[largest], 'blue');
    }
    largest = l;
    divUpdate(divs[largest], divSize[largest], 'red');
  }
  if (r < n && divSize[r] > divSize[largest]) {
    if (largest != i) {
      divUpdate(divs[largest], divSize[largest], 'blue');
    }
    largest = r;
    divUpdate(divs[largest], divSize[largest], 'red');
  }
  if (largest != i) {
    swap(i, largest);
    max_heapify(n, largest);
  }
};
const heap_sort = function () {
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    max_heapify(size, i);
  }
  for (let i = size - 1; i > 0; i--) {
    swap(0, i);
    divUpdate(divs[i], divSize[i], 'green');
    divUpdate(divs[i], divSize[i], 'yellow');
    max_heapify(i, 0);
    divUpdate(divs[i], divSize[i], 'blue');
    divUpdate(divs[i], divSize[i], 'green');
  }
  divUpdate(divs[i], divSize[i], 'green');
};
