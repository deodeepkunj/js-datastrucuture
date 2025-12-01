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

// Recursion

function factorial(x) {
  if (x == 0 || x == 1) {
    return 1;
  }
  return x * factorial(x - 1);
}
console.log(factorial(5));
