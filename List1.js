// document.getElementById("name").innerHTML = `<li>${products[i]}<button onclick="erase(${i})">x</button></li>`
//document.getElementById("userInput").value = "<li>" + product +" "+ "<button onclick='returnText()'>X</button>" + "</li>"
function returnText()
{
  // let a = document.getElementById("userInput").value 
  // document.write(a)
  // const products = []
  // let a = document.getElementById("userInput").value 
  //document.getElementById("userInput").value = "<li>" + product +" "+ "<button onclick='returnText()'>X</button>" + "</li>"
  
   let a = document.getElementById("userInput").value
   document.getElementById("lst").innerHTML += "<li>" + a + "</li>"
}