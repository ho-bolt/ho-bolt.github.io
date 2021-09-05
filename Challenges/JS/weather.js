
const API_KEY="422b83a61fc90c81e2e19eff2af2afed";
function SucessGeo(position){
    const lat = position.coords.latitude;
    const lon=position.coords.longitude; 
    const url= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(respone => respone.json()).then(data=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
       weather.innerText=`${data.weather[0].main} / ${data.main.temp}℃`;
       city.innerText=data.name

    });
}
function ErrorGeo(){
    alert("I have no idea where you are ")
}

navigator.geolocation.getCurrentPosition(SucessGeo,ErrorGeo);