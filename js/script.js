const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

const clock = setInterval(function time(){
 let dateToday  = new Date();
//  console.log(dateToday);
let hr = dateToday.getHours();
let min = dateToday.getMinutes();
let sec = dateToday.getSeconds();
// console.log(hr,min,sec);
if(hr < 10){
    hr = '0' + hr;
}
if(min < 10){
    hr = '0' + hr;
}
if(sec < 10){
    hr = '0' + hr;
}
hour.innerText = hr;
minute.innerText = min;
second.innerText = sec;
},1000) ;



