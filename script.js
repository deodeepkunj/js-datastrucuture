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

// Reverse String with Stack
let data = [];
let currentsize = data.length;
let str = "Hello";
function push(el) {
  data[currentsize] = el;
  currentsize++;
}

function pop() {
  let lastitem = data[currentsize - 1];
  currentsize -= 1;
  data.length = currentsize;
  return lastitem;
}

str = str.split("");

function reverseStr(ar) {
  for (let i = 0; i < ar.length; i++) {
    push(ar[i]);
  }
  for (let i = 0; i < ar.length; i++) {
    ar[i] = pop();
  }
  return str.join("")
}

console.log(reverseStr(str))


