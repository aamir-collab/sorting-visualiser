const Merge = function () {
  document.getElementById('time-worst').innerText = 'O(N log N)';
  document.getElementById('time-avg').innerText = 'Θ(N log N)';
  document.getElementById('time-best').innerText = 'Ω(N log N)';
  document.getElementById('space-worst').innerText = 'O(N)';
  delay = 0;
  merge_partition(0, size - 1);
  enableButtons();
};
const merge_sort = function (start, mid, end) {
  let p = start;
  let q = mid + 1;
  let arr = [];
  let k = 0;
  for (let i = start; i <= end; i++) {
    if (p > mid) {
      arr[k++] = divSize[q++];
      divUpdate(divs[q - 1], divSize[q - 1], 'red');
    } else if (q > end) {
      arr[k++] = divSize[p++];
      divUpdate(divs[p - 1], divSize[p - 1], 'red');
    } else if (divSize[p] < divSize[q]) {
      arr[k++] = divSize[p++];
      divUpdate(divs[p - 1], divSize[p - 1], 'red');
    } else {
      arr[k++] = divSize[q++];
      divUpdate(divs[q - 1], divSize[q - 1], 'red');
    }
  }
  for (let m = 0; m < k; m++) {
    divSize[start++] = arr[m];
    divUpdate(divs[start - 1], divSize[start - 1], 'green');
  }
};

const merge_partition = function (start, end) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    divUpdate(divs[mid], divSize[mid], 'yellow');
    merge_partition(start, mid);
    merge_partition(mid + 1, end);
    merge_sort(start, mid, end);
  }
};
//869741
