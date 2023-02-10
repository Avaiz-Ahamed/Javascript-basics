function refreshCategories() {
  fetch("http://localhost:3000/products/categories").then(function (response) {
    response.json().then(function (categories) {
      console.log(categories);
      for (i = 0; i <= categories.length; i++) {
        document.getElementById(
          "category-list"
        ).innerHTML += `<ul class="nav nav-tabs">
        <li>
          <button onclick="fun1(\`${categories[i]}\`)">${categories[i]}</button>
        </li>
      </ul>`;
      }
    });
  });
}

function search() {
  const category = document.getElementById("name1").value;
  searchByTitle(category);
}

function searchByTitle(title) {
  a = "http://localhost:3000/products/title/" + title;
  fetch(a).then(function (response) {
    response.json().then(function (products) {
      for (var i = 0; i < products.length; i++) {
        document.getElementById("product-list").innerHTML += `
        <div class="col">
        <div class="card" style="width: 18rem;">
        <img src="${products[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${products[i].title}</h5>
          <p class="card-text">${products[i].description}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">${products[i].category}</li>
          <li class="list-group-item">${products[i].price}</li>
          <li class="list-group-item">${products[i].rating.rate}</li>
          </ul>
          <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
          </div>
          </div>
          </div>`;
      }
    });
  });
}

function allProducts() {
  fetch("http://localhost:3000/products").then(function (response) {
    response.json().then(function (products) {
      for (var i = 0; i < products.length; i++) {
        document.getElementById("product-list").innerHTML += `
        <div class="col">
        <div class="card" style="width: 18rem;">
        <img src="${products[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${products[i].title}</h5>
          <p class="card-text">${products[i].description}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">${products[i].category}</li>
          <li class="list-group-item">${products[i].price}</li>
          </ul>
          <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
          </div>
          </div>
          </div>`;
      }
    });
  });
}

/*function fun1(category) {
  fetch("https://fakestoreapi.com/products").then(function (response) {
    response.json().then(function (products) {
      //     console.log(products.category);
      for (i = 0; i <= products.length; i++) {
        if (products[i].category === category) {
          document.getElementById("product-list").innerHTML += `
          <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${products[i].image}" class="card-img-top" alt="...">
          <div class="card-body">
          <h5 class="card-title">${products[i].title}</h5>
          <p class="card-text">${products[i].description}</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item">${products[i].category}</li>
          <li class="list-group-item">${products[i].price}</li>
          <li class="list-group-item">${products[i].rating.rate}</li>
          </ul>
          <div class="card-body">
          <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a>
          </div>
          </div>
          </div>`;
        }
      }
    });
  });
}*/

function createProduct() {
  const newProduct = {};
  const form = document.getElementById("product-form");
  form.querySelectorAll("input").forEach((input) => {
    newProduct[input.getAttribute("name")] = input.value;
  });

  // we have product object
  fetch("http://localhost:3000/products", {
    method: "POST",
    body: JSON.stringify(newProduct),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(function (res) {
    allProducts();
  });
}


