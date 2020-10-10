var container = document.getElementById("mainContainer");
const navBar = `<nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
<a class="navbar-brand" href="#">Navbar</a>
<button
  class="navbar-toggler"
  type="button"
  data-toggle="collapse"
  data-target="#navbarNavDropdown"
  aria-controls="navbarNavDropdown"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
  <ul class="navbar-nav ml-auto">
    <li class="nav-item">
      <a class="nav-link" href="#">Sign In</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Contact Us</a>
    </li>
  </ul>
</div>
</nav>`;

const grid = 
container.innerHTML = navBar;
fetch('./products.js')
  .then(res => res.json())
  .then(data => {
    // console.log(data[0])
    // var myPara = document.getElementById("myTestPara");
    // myPara.innerText = data[0].name + ' is our product';
  })
  .catch(err => console.error(err));

