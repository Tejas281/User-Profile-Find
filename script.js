const APIURl ='https://api.github.com/users/'

const main =document.getElementById('main')
const form =document.getElementById('form')
const search =document.getElementById('search')
async function getUser(username)
{
    try{
     
    const { data } = await axios(APIURL +
         username)
 
    createUserCard(data)
     
    }
    catch(err){
      if(err.responese.status == 404){
        creatErrorCard('No profile')
      }
       
    }
 
}

function createUserCard(user){
    const cadrHTML =` 
    <div class="card">
    <div>
       <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
   </div>
   <div class="user-info">
       <h2>${user.name}</h2>
       <p>${user.bio}</p>
 <ul>
     <li>${user.followers}<strong>Followers</strong></li>
     <li>${user.following}<strong>Following</strong></li>
     <li>${user.public_repo}<strong>Repos</strong></li>
 </ul>
 <div id="repos">
      
 </div>
   </div>
   </div>`

   main.innerHTML = cadrHTML
}
function creatErrorCard(msg){
  const cardHTMl =`
  <div class = "card">
  <h1>${msg}<h1>
  </div>
   `
   main.innerHTML = cardHTMl
}

form.addEventListener('submit', (e) => {
     e.preventDefault()
     const user = search.value
     if(user){
  
        getUser(user)
         search.value = ''

     }
})