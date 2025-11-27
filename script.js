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


let data = [60,30,10,67,40];
let pos = 2;
let newEl = 70;

for (let i = data.length-1; i >=pos; i--){
    data[i + 1] = data[i]
    if(i === pos){
        data[i] = newEl 
    }
    console.log(data)

}



