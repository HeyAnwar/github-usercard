/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';
console.log('check out axios: \n \n', axios);
// const result = axios.get('https://api.github.com/users/HeyAnwar')
// console.log(result)
const cardEntry = document.querySelector('.cards');
axios
.get('https://api.github.com/users/HeyAnwar')
.then(res => {
  const card = cardMaker(res.data)
  cardEntry.appendChild(card)
})
.catch((drama) => {
  console.log(drama)
});


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/


function cardMaker (obj) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  
  const userImg = document.createElement('img');
  userImg.src = obj.avatar_url;

  const infoDiv = document.createElement('div');
  infoDiv.classList.add('card-info');

  const h3 = document.createElement('h3');
  h3.classList.add('name');
  h3.innerText = obj.name;

  const p1 = document.createElement('p');
  p1.classList.add('username');
  p1.innerText = obj.login;

  const p2 = document.createElement('p');
  p2.innerText = ('Location: ' + obj.location);

  const p3 = document.createElement('p');
  p3.innerText = ('Profile: ' );

  const aTag = document.createElement('a');
  aTag.innerText = ('Github Profile');
  aTag.setAttribute('href', obj.html_url);

  const p4 = document.createElement('p');
  p4.innerText = ('Followers: ' + obj.followers);

  const p5 = document.createElement('p');
  p5.innerText = ('Following: ' + obj.following);

  const p6 = document.createElement('p');
  p6.innerText = ('Bio: ' + obj.bio);

  cardDiv.appendChild(userImg);
  cardDiv.appendChild(infoDiv);
  infoDiv.appendChild(h3);
  infoDiv.appendChild(p1);
  infoDiv.appendChild(p2);
  infoDiv.appendChild(p3);
  infoDiv.appendChild(p4);
  infoDiv.appendChild(p5);
  infoDiv.appendChild(p6);
  p3.appendChild(aTag);


return cardDiv

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
