import data from "./myApi.JSON" assert { type: "json" };
let listContainer = document.querySelector(".list-container");

function showData() {
  data.forEach((item ) => {
    const { title, image, embedUrls, description,date, location, flight } = item //distructure
    listContainer.innerHTML += 
   `<div class= "card col-md-3 m-1 ">
    <h2>${title}</h2>
    <img class="img-fluid img-top" src="${image} ">
    <button class="btn btn-outline-primary fstivalbtn ">click for more</button>
    <p class = "d-none dscrip"><b>Description:</b>${description}</p>
    <P><b>Date:</b>${date}</p>
    <p><b>Location:</b>${location}</p>
    <a href="${embedUrls  } rel="noopener noreferrer" target="_blank" "><button type="button" class="btn btn-outline-primary" >see more</button></a>
    <a href="${flight } rel="noopener noreferrer" target="_blank" "><button type="button" class="btn btn-outline-primary" >Book a flight</button></a>


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
    item.addEventListener("mouseleave",()=>{
      document.querySelectorAll(".dscrip")[i].classList.toggle("d-none");
     document.querySelectorAll(".dscrip")[i].classList.toggle("d-block")
    })
  })
}





