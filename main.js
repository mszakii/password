let up = document.querySelector(".gen");
let go = document.querySelector(".ser");

go.onclick = function get() {
  
  if (go.style.bottom == "-90%") {
    go.style.bottom = "0";
  } else {
    go.style.bottom = "-90%";
  }
  
}

up.onclick = function get() {
  
  if (go.style.bottom == "-90%") {
    go.style.bottom = "0";
  } else {
    go.style.bottom = "-90%";
  }
  
  let code = document.querySelector(".code");
  
  let car = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$_&*?%"
  ;
  let count = 24;
  let serial = "";
  for (let i = 0; i < count; i++) {
    serial += car[Math.floor(Math.random() * car.length)];
  }
  code.innerHTML = serial;
}
