const baseApi = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
let usersDIV = document.getElementById("container");
let loading = document.getElementById("loading");
async function getUsers(){
  try{    
   loading.innerHTML = "<img src=/imags/Loading_icon.gif>"

      let users = await fetch(baseApi).then(
        (res) => res.json())
        users.forEach((user) =>{
          container.innerHTML += cardTemplate(user);
          });
        } 
  catch (err) {
    alert(err)
  } 
  finally {
    loading.innerHTML=""
  }
 }
 let counter=1;
 function cardTemplate(user) {
   return `
   
   <div class ="card">
   <div ><img src="https://randomuser.me/api/portraits/men/${counter++}.jpg"></div>
   <p> Name:${user.name.first} ${user.name.last}</p>
   <p>Age:${user.age}</p>
   <p>Phone number:${user.phone}</p>
   <p>${user.email}</p>
   </div>`;
  }
 

    




