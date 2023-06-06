/* Make component for header */
class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="nav-list">
    <div class="log">
    <a href="https://www.uh.edu/" target="_blank"><img class="top-logo" alt="University of Houston" loading="lazy" src="https://www.uh.edu/images/uh-primary.svg" ></a>
    </div>
    <ul class="ul-list">
       <li class="btn"><span class="fas fa-bars"></span></li>
       <div class="items">
        <li class="menu-item"><a href="index.html">Home</a></li>
        <li class="menu-item"><a href="about.html">About</a></li>
        <li class="menu-item"><a href="athletics.html">Athletics</a></li>
        <li class="menu-item"><a href="map.html">Map</a></li>
       </div>
       <li class="search-icon">
          <input id="searchbar" type="search" onkeyup=search()   placeholder="Search for home, about, athletics or map">
          <label class="icon">
          <span class="fas fa-search"></span>
          </label>
       </li>
       
       <div id="list">
        <a class="listItem" href="index.html">Home</a>
        <a class="listItem" href="about.html">About</a>
        <a class="listItem" href="athletics.html">Athletics</a>
        <a class="listItem" href="map.html">Map</a>
       </div>
    </ul>
  </nav>
    `
  }
}

customElements.define('my-header', MyHeader);


/* Make component for footer */
class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="footer-container">
    <h1 class="footer-heading">Go Coogs!</h1>
    <div class="row">
  <div class="column">
  <img src="src/images/uh-logo.svg" alt="University of Houston Logo"/>
  <br>
  <br>
  <div class="contact-info"> 
  <a href="https://www.google.com/maps/place/University+of+Houston" target="_blank">University of Houston <br> Houston, Texas 77204 </a>
   <br>
  <a class="phone-number" href="tel:1-713-743-2255">(713) 743-2255</a>
  </div>
    <div class="button"><a href="map.html" class="">Campus Map</a></div>
  </div>

  <div class="column">
    <h2 class="column-header">Student Success</h2>
    <p class="footer-text">Some text..Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
  </div>
  <div class="column">
    <h2 class="column-header">Health</h2>
    <p class="footer-text">Some text..Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
  </div>
  <div class="column">
    <h2 class="column-header">Safety</h2>
    <p class="footer-text">Some text..Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
  </div>
</div>
</div>
    `
  }
}

customElements.define('my-footer', MyFooter);


/*start of Searchbar Data*/
function loadSearchData() {
  // Data to be used in the searchbar
  let countries = [ " "   
  ];

  console.log(countries);

  // Get the HTML element of the list
let list = document.getElementById('list');
// Add each data item as an <a> tag
countries.forEach((country)=>{
    let a = document.createElement("a");
    a.innerText = country;
    a.classList.add("listItem");
    list.appendChild(a);
})
}

function search() {
  // search functionality goes here
  let listContainer = document.getElementById('list');
  let listItems = document.getElementsByClassName('listItem');
  let input = document.getElementById('searchbar').value;
  input = input.toLowerCase(); 

  let noResults = true;
  for (i = 0; i < listItems.length; i++) { 
    if (!listItems[i].innerHTML.toLowerCase().includes(input) || input === "") {
        listItems[i].style.display="none";
        continue;
    }
    else {
        listItems[i].style.display="flex";
        noResults = false; 
    }
    // listContainer.style.display = noResults ? "none" : "block";
    listContainer.style.display = noResults ? "none" : "block";
}
}
/*End of Searchbar Data*/