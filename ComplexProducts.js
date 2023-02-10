fetch("https://fakestoreapi.com/products").then(function(response){
  response.json().then(function(products) {
    console.log(products);
    for(var i=0; i<products.length; i++)
{
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
</div>`
}
  })
})

// console.log("Hello!")