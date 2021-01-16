
import axios from 'axios';
let artArr = [
  'bootstrap',
  'javascript',
  'jquery',
  'node',
  'technology'
]
const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

const divCard = document.createElement('div');
divCard.classList.add('card');


const divHead = document.createElement('div');
divHead.classList.add('headline');
divHead.textContent = article.headline;


const divAuth = document.createElement('div');
divAuth.classList.add('author');
divAuth.textContent = article.authorName;


const divImg = document.createElement('div');
divImg.classList.add('img-container');


const pic = document.createElement('img');
pic.src = article.authorPhoto;

const span = document.createElement('span');



divCard.appendChild(divHead);
divCard.appendChild(divAuth);
divAuth.appendChild(divImg);
divImg.appendChild(pic);
divAuth.appendChild(span);

divCard.addEventListener('click', (event)=>{
  console.log(divHead.textContent);
})

return divCard;

}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

axios
.get('https://lambda-times-api.herokuapp.com/articles')
  .then((response)=>{
    console.log(response);
    artArr.forEach((topics)=>{
      response.data.articles[topics].forEach((info)=>{
        document.querySelector(selector).appendChild(Card(info))
      })
    })
  })
  .catch((error)=>{
    console.log(error);
  })





}

export { Card, cardAppender }
