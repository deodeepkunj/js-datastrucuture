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

// delete element from an array
let data = [10,20,30,12,19,92];
let pos = 2;
for (let i = pos; i < data.length-1; i++){
    data[i] = data[i+1]
}
data.length -- ;
console.log(data)






