const products = [
    "iPhone",
    "Pxel",
    "Note Pro",
    "Monitor",
    "Laptop"
]

for(var i=0;i<products.length;i++)
{
    document.getElementById("lst").innerHTML += `<li>${products[i]}<button onclick="erase(${i})">x</button></li>`
    //document.getElementById("lst").innerHTML += "<li>" + product +" "+ "<button onclick='erase(${product})'>X</button>" + "</li>"
}

function erase(add)
{
    products.splice(add , 1)
    console.log(products)
    document.getElementById("lst").innerHTML = "";
    for(var i=0;i<products.length;i++)
    {
        document.getElementById("lst").innerHTML += `<li>${products[i]}<button onclick="erase(${i})">x</button></li>`
        //document.getElementById("lst").innerHTML += "<li>" + product +" "+ "<button onclick='erase()'>X</button>" + "</li>"
    }
}
/*<li>product name <button>X</button></li>
<li>product name <button>X</button></li>
<li>product name <button>X</button></li>*/