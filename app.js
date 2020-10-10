var container = document.getElementById("mainContainer");

const skeleton = `<div class="row-12">
<div class="col p-0">
  <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
    <a class="navbar-brand" href="#">Blind Watch Maker</a>
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
  </nav>
  <!-- End of Nav Bar -->
</div>
</div>
<!-- Row 1 -->
<div class="row" id="productGrid">

</div>
`;
container.innerHTML = skeleton;
const pGrid = document.getElementById("productGrid"); 
function iterateProducts(value, index, array) {
  const place = document.createElement('div');
  const card = document.createElement('div');
  const pImg = document.createElement('img');
  const cardBody = document.createElement('div');
  const pName = document.createElement('h5');
  const pDesc = document.createElement('p');
  const button = document.createElement('button');

  place.classList.add("col", "mt-3", "mb-3", "col-md-4");
  card.classList.add("card");
  pImg.classList.add("card-img-top", "productImage");
  cardBody.classList.add("card-body");
  pName.classList.add("card-title");
  pDesc.classList.add("card-text", "text-muted");
  button.classList.add("btn", "btn-primary", "mt-1");

  place.appendChild(card);
  card.appendChild(pImg);
  card.appendChild(cardBody);
  cardBody.appendChild(pName);
  cardBody.appendChild(pDesc);
  cardBody.appendChild(button);

  pImg.src = array[index]['imgLink'];
  pName.innerText = array[index]['name'];
  pDesc.innerText = array[index]['desc'] + ' ' + array[index]['price'];
  button.innerText = 'Add To Cart'
  console.log(place);
  pGrid.appendChild(place);
}


fetch('./products.js')
  .then(res => res.json())
  .then(data => {
    data.forEach(iterateProducts);
  })
  .catch(err => console.error(err));
