function tickClock() {
  const clockEl = document.getElementById("currentTime");
  if (clockEl) {
    clockEl.innerHTML = new Date().toUTCString();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  tickClock();
  setInterval(tickClock, 1000);
});

// reverse array with recursion

function reverseArray(arr, start, last) {
  if (start >= last) return arr;

  let temp = arr[start];
  arr[start] = arr[last];
  arr[last] = temp;
  return reverseArray(arr, start + 1, last - 1);
}

let array = [3, 20, 9, 0];
console.log(reverseArray(array, 0, array.length - 1));
