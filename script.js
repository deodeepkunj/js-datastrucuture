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

// Serach element in an array
function searchElemnt(ar, itm) {
  for (let i = 0; i <= ar.length; i++) {
    if (ar[i] === itm) {
        return true
    }
  }
  return false
}
let arr = [20, 30, 10, 5, 50, 100];
let item = 200;
console.log(searchElemnt(arr, item));
