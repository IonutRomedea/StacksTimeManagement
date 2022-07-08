let cuts = document.getElementById("cuts");
let welds = document.getElementById("welds");
let shw = document.getElementById("shw");
let thw = document.getElementById("thw");
let chamfers = document.getElementById("chamfers");
let trims = document.getElementById("trims");
let button = document.getElementById("button");

let minutes = document.getElementById("minutesOutput");
let hours = document.getElementById("hoursOutput");

function calculateTime () {
    totalMinutes = parseInt(cuts.value) + parseInt(welds.value*3) + parseInt(shw.value*30) + 
                    parseInt(thw.value*60) + parseInt(chamfers.value) + parseInt(trims.value*2)
    minutes.textContent = totalMinutes;
    totalHours = totalMinutes/60;
    hours.textContent = totalHours;
}

button.addEventListener('click', calculateTime);