// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

let cardsEntry = document.querySelector(".cards-container");
let topicArray;

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    topicArray = Object.keys(response.data.articles);
    topicArray.forEach(topic => {
      response.data.articles[`${topic}`].forEach(article => {
        cardsEntry.appendChild(Card(article, topic));
      })
    })
  })




Card = (object, className) => {
  let card = document.createElement("div");
  let headline = document.createElement("div");
  let author = document.createElement("div");
  let imgContainer = document.createElement("div");
  let img = document.createElement("img");
  let name = document.createElement("span");

  card.classList.add("card");
  card.classList.add(className);
  headline.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  img.src = object.authorPhoto;

  headline.textContent = object.headline;
  name.textContent = `By ${object.authorName}`;

  imgContainer.appendChild(img);

  author.appendChild(imgContainer);
  author.appendChild(name);

  card.appendChild(headline);
  card.appendChild(author);

  return card;
}