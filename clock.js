let myName = document.getElementById("myName");
let myClock = document.getElementById("myClock");
myName.innerHTML = prompt("isminizi giriniz");

function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  const gunler = [
    "Pazar",
    "Pazartesi",
    "Sali",
    "Carsamba",
    "Persembe",
    "Cuma",
    "Cumartesi",
  ];

  let gun = gunler[date.getDay()];

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let time= hours + ':' + minutes + ':' + seconds + ' ' + gun
myClock.innerHTML= time  
}
setInterval(() => {
    showTime()
}, 1000);
