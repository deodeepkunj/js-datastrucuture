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

// array soring (Bubble sort)
let arr = [40,30,12,25]

for (let i = 0; i < arr.length; i++){
    for (let j = 0; j <arr.length; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp
        }
    }
}

console.log(arr)