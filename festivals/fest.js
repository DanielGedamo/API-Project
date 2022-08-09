import data from "./myApi.JSON" assert { type: "json" };
let listContainer = document.querySelector(".list-container");
const api = `https://api.openweathermap.org/data/2.5/weather?q=`
const APIKey=`&appid=85470bd4ed69b1bdaae5b623c875c6d7`
async function getWeatherByCity(city){
try{
  return await fetch(`${api}${city}${APIKey}`).then(res=>res.json())
}
catch(error){
  console.log(error)
}
}
function showData() {
  data.forEach((item,index) => {
    const { title, image, embedUrls, description, date, location, flight} =
      item; //distructure
      let city = getCity(location)
    listContainer.innerHTML += `<div class= "card col-md-3 m-1  ">
   <div class ="front">
    <h2>${title}</h2>
    <img class="img-fluid img-top" src="${image} ">
    <P><b>Date:</b>${date}</p>
    <p><b>Location:</b>${location}</p>
      <p id="${city}_weather"></p>
    </div>
    <div class="back"> <p><b>Description:</b>${description}</p> 
    <a href="${embedUrls} rel="noopener noreferrer" target="_blank" "><button type="button" class="btn btn-outline-primary" >see more</button></a>
    <a href="${flight} rel="noopener noreferrer" target="_blank" "><button type="button" class="btn btn-outline-primary" >Book a flight</button></a>
    </div>
    </div>
   `;
   printWeather(city);
  });
  showDescription();
}
showData();
function getCity(location){
  let index = location.indexOf(',');
  return location.substring(0,index)
}
function showDescription() {
  document.querySelectorAll(".fstivalbtn").forEach((item, i) => {
    item.addEventListener("mouseover", () => {
      document.querySelectorAll(".dscrip")[i].classList.toggle("d-block");
      document.querySelectorAll(".dscrip")[i].classList.toggle("d-none");
    });
    item.addEventListener("mouseleave", () => {
      document.querySelectorAll(".dscrip")[i].classList.toggle("d-none");
      document.querySelectorAll(".dscrip")[i].classList.toggle("d-block");
    });
  });
}
async function printWeather(city) {
  let cityWeather = await getWeatherByCity(city);
  let weather = `${Math.floor(cityWeather['main']['temp'])}`;
  document.getElementById(`${city}_weather`).innerHTML =`${cityWeather['name']} <br/> <b>${weather.slice(0,2)}</b>℃`
   console.log(weather);   
   console.log(cityWeather)        
}

