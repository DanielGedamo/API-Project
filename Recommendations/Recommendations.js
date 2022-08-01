let userUrl = "https://my-json-server.typicode.com/Jeck99/fake-server/users";
let container = document.getElementById(`container`);
let loading = document.getElementById("loading");
async function getUsers() {
  loading.innerText = "Loading..."

  let users = await fetch(userUrl).then(
    (res) => res.json(),
    (e) => alert(e)
  );
  if (users && users.length) {
    users.forEach((user) => {
        container.innerHTML += cardTemplate(userUrl);    });
  }
  loading.innerText=""
}