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
 let counter=0;
 const userPicArray= [
  'https://img.freepik.com/free-photo/portrait-successful-businesswoman-suit-smiling-looking-like-professional-camera-white-background_1258-89425.jpg',
  'https://img.freepik.com/free-photo/waist-up-shot-handsome-self-confident-cheerful-male-entrepreneur-has-broad-smile_273609-18909.jpg?w=2000',
  'https://img.freepik.com/free-photo/close-up-shot-pretty-woman-with-perfect-teeth-dark-clean-skin-having-rest-indoors-smiling-happily-after-received-good-positive-news_273609-1248.jpg?w=360',
  'https://img.freepik.com/free-photo/funny-young-happy-cheerful-girl-with-two-buns-laughing-smiling_176420-10042.jpg?size=626&ext=jpg',
  'https://img.freepik.com/free-photo/real-people-natural-portrait-happy-guy-smiling-laughing-looking-upbeat-camera-standing-glasses-white-background_1258-65662.jpg?w=2000',
  'https://t3.ftcdn.net/jpg/02/11/85/38/360_F_211853826_fykEscofGvoemrJJl8ube7w0O2tccR17.jpg',
  'https://ath2.unileverservices.com/wp-content/uploads/sites/8/2020/11/06132750/Beard-styles-goatee-shutterstock.jpg',
  'https://t3.ftcdn.net/jpg/01/97/11/64/360_F_197116416_hpfTtXSoJMvMqU99n6hGP4xX0ejYa4M7.jpg',
  'https://t3.ftcdn.net/jpg/02/11/85/38/360_F_211853826_fykEscofGvoemrJJl8ube7w0O2tccR17.jpg',
  'https://media.istockphoto.com/photos/mature-businessman-smiling-over-white-background-picture-id685132245?b=1&k=20&m=685132245&s=170667a&w=0&h=H84m1hrH8bSDnucIox4mFQwQ6UySjJTwWrb5RBOhAJQ=',
  'https://media.istockphoto.com/photos/mature-businessman-smiling-over-white-background-picture-id685132245?b=1&k=20&m=685132245&s=170667a&w=0&h=H84m1hrH8bSDnucIox4mFQwQ6UySjJTwWrb5RBOhAJQ=',


]

 function cardTemplate(user) {
  console.log(user)
   return `
   
   <div class ="card d-flex">
   <div><img src= "${userPicArray[counter++]}"></div>
   <p ><b>${user.name.first} ${user.name.last}<b/></p>
   <p class = "d-flex justify-content-center"><b>${user.age}<b/></p>
   <p class = "d-flex justify-content-center"><b>${user.phone}<b/></p>
   <p class =>${user.email}</p>
   </div>`;
  }

  let recommendDiv = document.querySelector("recommendDiv")
  async function getreviews() {
    try{
    return await fetch("https://app.reviewapi.io/api/v1/reviews?apikey=f04c4630-170e-11ed-aea4-2fa90ebeae9c&url=https%3A%2F%2Fwww.capterra.com%2Fp%2F140650%2FRecruitee&amount=15")
        .then(response => response.json())
        .then(response =>{
          for(let i=0; i<12; i++){
            document.querySelector("recommendDiv").innerHTML+=
            `${response}`
          }
          console.log(response)})
      }
        catch(err) {console.log(err)};

}
getreviews()

function showReviewsData(){

}showReviewsData()
 





    




