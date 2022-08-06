const baseApi = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
let usersDIV = document.getElementById("container");
let loading = document.getElementById("loading");
async function getUsers(){
  try{    
   loading.innerText = "Loading..."

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
    loading.innerText=""
  }
 }
 let counter=1;
 function cardTemplate(user) {
   return `
   
   <div class ="card">
   <div ><img src="https://randomuser.me/api/portraits/men/${counter++}.jpg"></div>
   <p> name:${user.name.first} ${user.name.last}</p>
   <p>age:${user.age}</p>
   <p>phone number:${user.phone}</p>
   <p>email:${user.email}</p>
   <p>:${user.email}</p>
   </div>`;
  }
 

    




// let userUrl = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
// let userTable = document.getElementById("userTable");
// let loading = document.getElementById("loading");
// async function getUsers() {
//   loading.innerText = "Loading..."

//   let users = await fetch(userUrl).then(
//     (res) => res.json(),
//     (e) => alert(e)
//   );
//   if (users && users.length) {
//     users.forEach((user) => {
//       userTable.innerHTML += createTable(user);
//     });
//   }
//   loading.innerText=""
// }
// function createTable(user) {
//   return `
// <tr><td>${user.email}</td> 
// <td>${user.phone}</td> 
// <td>${user.age}</td>
// <td>${user.name.last}</td>
// <td>${user.name.first}</td>
// <td><img src= /imags/Boom-2018.jpg></td></tr>
// `;
// }