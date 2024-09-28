const apiKey= "7d5e74e7b112e34001dc87b79a2fc7c3";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city) {

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if(response.status==404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="none";

  }else{
    const data=await response.json();
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".tem").innerHTML=Math.round(data.main.temp)+"°C"
    document.querySelector(".humidity").innerHTML=data.wind.speed+"km/h"
    
    if (data.weather[0].main == "Clouds") {
      icon.src = "img/clouds.png";
  } else if (data.weather[0].main == "Clear") {
      icon.src = "img/clear.png";
  } else if (data.weather[0].main == "Rain") {
      icon.src = "img/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
      icon.src = "img/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "img/mist.png";
  }
  
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".error").style.display = "none";
  
  }
}
searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather();

