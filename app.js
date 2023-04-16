const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway= document.querySelector('.giveaway');
const deadline= document.querySelector('.deadline');
const items= document.querySelectorAll('.deadline-format h4');

// always will have a future date
let tempDate= new Date();
let tempYear= tempDate.getFullYear();
let tempMonth=tempDate.getMonth();
let tempDay= tempDate.getDate();



//  this makes it always in the future and does never end
const futureDate = new Date(tempYear,tempMonth,tempDay+10,19,14,0);
//  date 
//  this is static hence countdown would actually work
// let futureDate = new Date(2023,0,7,19,05,0);
// console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = futureDate.getMonth();
// console.log(month);
const giveawaymonth= months[month];

const day= weekdays[futureDate.getDay()];
// console.log(day);
const date = futureDate.getDate();
// console.log(date);

giveaway.textContent=`giveway ends on ${day}, ${date} ${giveawaymonth} ${year} ${hours}:0${minutes}pm`;

 const futureTime= futureDate.getTime();
function getRemaningTime(){
  const today = new Date().getTime();
  const t= futureTime- today;
  // console.log(t);
  //  1s= 1000ms 
  // 1m =60s
  //  1hr = 60 min
  // 1d =24hr;
  //  values in ms 
  const oneDay = 24 *60 *60 * 1000;
  // console.log(oneDay);
  const oneHour = 60*60*1000;
  const oneMinute= 60*1000;
  //  calculate all values
  let days=t/oneDay;
  days= Math.floor(days);
  // console.log(days);

  // hours
   let hours= t/oneHour;
   hours= Math.floor(hours%24);
  //  console.log(hours);

  let minutes= t/oneMinute;
  minutes= Math.floor(minutes%60);
  // console.log(minutes);
    // 
  let seconds = t/1000;
  seconds= Math.floor(seconds%60);
  // console.log(seconds);

  // set values 

  const values =[days,hours,minutes,seconds];
  function format(item){
    if(item<10){
      return item =`0${item}`
    }
    return item
  }
  items.forEach(function(item,index){
    item.innerHTML=format(values[index]);
  });
   
if(t<0){
  clearInterval(countdown);
  deadline.innerHTML=`<h4 class="expired">Sorry this giveaway has expired </h4>`
}


}
// countdown
let countdown= setInterval(getRemaningTime,1000);
getRemaningTime();