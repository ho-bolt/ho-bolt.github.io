const calender=document.querySelector("#clock span:first-child")
const clock=document.querySelector("#clock span:last-child");

function MyClock(){
    const date=new Date();
    const year=date.getFullYear();
    const month=String(date.getMonth()+1).padStart(2,"0");
    const days=String(date.getDate()).padStart(2,"0");


    const hours=String(date.getHours()).padStart(2,"0");
    const min=String(date.getMinutes()).padStart(2,"0");
    const seconds=String(date.getSeconds()).padStart(2,"0");

    calender.innerText=` ${year} - ${month} - ${days}`;
    clock.innerText=`${hours} : ${min} : ${seconds}`;

}
MyClock();
setInterval(MyClock,1000);