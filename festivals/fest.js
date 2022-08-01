import data from "./myApi.JSON" assert { type: "json" };
let listContainer = document.querySelector(".list-container");
function showData() {
  data.forEach((item ) => {
    let title = item.title;
    let image = item.image;
    let embedUrls = item.embedUrls;
    let description = item.description;
    let date = item.date;
    let location = item.location;
    listContainer.innerHTML += 
    `<div class= "card col-md-3 ">
    <h2>${title}</h2>
    <img class="img-fluid img-top" src="${image} ">
    <p class = "d-none dscrip"><b>Description:</b>${description}</p>
    <button class="btn btn-outline-primary fstivalbtn ">click for more</button>
    <P><b>Date:</b>${date}</p>
    <p><b>Location:</b>${location}</p>
    <a href="${embedUrls}"><button type="button" class="btn btn-outline-primary">see more</button></a>
    </div>
   `;
  });
  showDescription()
}
showData();



 
function showDescription(){
  document.querySelectorAll(".fstivalbtn").forEach((item,i)=>{
    // console.log(item);
    item.addEventListener("mouseover",()=>{
     document.querySelectorAll(".dscrip")[i].classList.toggle("d-block")
     document.querySelectorAll(".dscrip")[i].classList.toggle("d-none");
    })
  })
}
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fb896adc91mshc9c4a546e6d250dp112778jsn2c0f8f724fbd',
		'X-RapidAPI-Host': 'skyscanner44.p.rapidapi.com'
	}
};

fetch('https://skyscanner44.p.rapidapi.com/autocomplete?query=berlin', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

