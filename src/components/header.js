const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const dom = document.querySelector('.header-container')


const header = document.createElement('div');
header.classList.add('header')




const spanD = document.createElement('span');
spanD.classList.add('date')
spanD.textContent = date;
header.appendChild(spanD);



const h1 = document.createElement('h1');
h1.textContent = ('Lambda Times');
h1.textContent = title
header.appendChild(h1);

const spanT = document.createElement('span');
spanT.classList.add('temp')
spanT.textContent = temp
header.appendChild(spanT);

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

.get('.header-container')


.then()

.catch()


}

export { Header, headerAppender }
