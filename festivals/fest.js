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
    `<div class= "card ">
    <h2>${title}</h2>
    <img  src="${image} "<button  type="button"  data-bs-toggle="modal" data-bs-target="#exampleModal">
    <p>${description}</p>
  </button>"
    <a href="${embedUrls}"><button type="button" class="btn btn-outline-primary">see more</button></a>
    </div>
   `;
  });
}
showData();

