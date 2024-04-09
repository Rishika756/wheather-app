const apikey="eef218a1131c6c00800e95ad4e02e91d"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");  
const wheatherIcon=document.querySelector(".wheather-icon")
async function checkWheather(city){
    const response = await fetch(apiUrl+city+`&appid=${apikey}`);
    var data = await response.json();
    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/hr";
    if(data.weather[0].main=="Clouds"){
        wheatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        wheatherIcon.src="images/clear.png"
    }
    else if(data.weather[0].main== "Rain"){
        wheatherIcon.src="images/rain.png"
    }
    else if(data.weather[0].main== "Drizzle"){
        wheatherIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main== "Mist"){
        wheatherIcon.src="images/mist.png"
    }
    // document.querySelector(".wheather").style.display="block";
}
searchbtn.addEventListener("click",()=>{
    checkWheather(searchbox.value);

})
