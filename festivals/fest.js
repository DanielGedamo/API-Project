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
    <button class="btn btn-outline-primary fstivalbtn ">O</button>
    <p class = "d-none dscrip"><b>Description:</b>${description}</p>
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
    item.addEventListener("click",()=>{
  
    document.querySelectorAll(".dscrip")[i].classList.toggle("d-block")
  document.querySelectorAll(".dscrip")[i].classList.toggle("d-none");
  
    })
  })
}


