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

// stack with Javascript (push & pop)
let data = [];
let currentLength = data.length;

function push(el) {
  data[currentLength] = el;
  currentLength++;
}

function pop(){
  console.log(currentLength)
  currentLength -= 1
  data.length = currentLength
}

push(20);
push(30);
push(40);
pop()
pop()
console.log(data);
