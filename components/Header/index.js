// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component
let headerEntry = document.querySelector(".header-container");

function Header() {
  // create elements
  let header = document.createElement("div");
  let date = document.createElement("span");
  let title = document.createElement("h1");
  let temp = document.createElement("span");

  // assign classes and other properties
  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  // assign text content
  date.textContent = "MARCH 28, 2019";
  title.textContent = "Lambda Times";
  temp.textContent = "98&deg";

  // assemble structure
  let fragment = document.createDocumentFragment();
  fragment.appendChild(date);
  fragment.appendChild(title);
  fragment.appendChild(temp);

  header.appendChild(fragment);

  return header;
}

headerEntry.appendChild(Header());

