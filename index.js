const seconds= 1000,
minutes= 60*seconds,
hours=60*minutes,
days=24*hours;

const elementDays = document.querySelector("#days");
const elementHr = document.querySelector("#hours");
const elementMin = document.querySelector("#minutes");
const elementSec = document.querySelector("#seconds");


const TimeFunction=()=>
{

  let now=new Date();
  let dd=String(now.getDate()).padStart(2,"0");
  let mm=String(now.getMonth()).padStart(2,"0");
  let yyyy=now.getFullYear();

const enterDay = prompt("enter Day").padStart(2, "0");
const enterMonth = prompt("enter Month").padStart(2, "0");

now=(`${mm}/${dd}/${yyyy}`);
let targetDate = (`${enterMonth}/${enterDay}/${yyyy}`);

if(now>targetDate){
  targetDate=(`${enterMonth}/${enterDay}/${yyyy+1}`);

};

setInterval(()=>{
const timer= new Date(targetDate).getTime();
const Today = new Date().getTime();

const Difference = timer - Today;
const leftDay =Math.floor(Difference/days);
const leftHour =Math.floor( (Difference%days)/hours);
const leftMin =Math.floor( (Difference%hours)/minutes);
const leftSec =Math.floor( (Difference%minutes)/seconds);

elementDays.innerText = leftDay;
elementHr.innerText = leftHour;
elementMin.innerText = leftMin;
elementSec.innerText = leftSec;

},0)


}







TimeFunction();
