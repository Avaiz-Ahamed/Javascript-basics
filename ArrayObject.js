const products = [
    {
        type: "laptop",
        brand: "Apple"
    },
    {
        type: "phone",
        brand: "Samsung"
    },
    {
        type: "phone",
        brand: "Apple"
    },
    {
        type: "laptop",
        brand: "hp"
    },
    {
        type: "laptop",
        brand: "Dell"
    },
    {
        type: "monitor",
        brand: "Samsung"
    },
    {
        type: "mouse",
        brand: "LG"
    },
]

// how many laptops?
// how many samsung devices?
// how many apple devices?
// how many types of devices?
// how many devices of each brand?


// how many laptops?
var i=0
for (var product of products)
{
    if(product.type === "laptop")
    {
        i=i+1
    }
}
console.log("No.of laptops = "+i)


// how many samsung devices?
var j=0
for (var product of products)
{
    if(product.brand === "Samsung")
    {
        j=j+1
    }
}
console.log("No.of Samsung devices= "+j)



// how many apple devices?
var k=0
for (var product of products)
{
    if(product.brand === "Apple")
    {
        k=k+1
    }
}
console.log("No.of apple devices = "+k)

// how many types of devices?
var array = []
for(var product of products)
{
    if(array.includes(product.type))
    {
        
    }
    else
    {
        array.push(product.type)
    }
}
console.log("The types of devices are " + array.length)
console.log(JSON.stringify(array))


var array1=[]
for(var product of products)
{
    if(array1.includes(product.brand))
    {
        
    }
    else{
        array1.push(product.brand)
    }
}
console.log(JSON.stringify(array1))


/*const l = {};

l['sdfgsdg']=  1

console.log(k)*/

/*const obj = {};
var y=0;

for(var product in products)
{
    const a = product.brand
    if(obj.type===a)
    {
        y = y+1
        obj[a] = y 
    }
}
console.log(obj)*/


const obj=[];

for(var product of products)
{
    const a = product.brand
    if(a in obj)
    {
        obj[a] += 1
    }
    else
    {
        obj[a] = 1
    }
}
console.log(obj)

/*const obj=[];

for(var product of products)
{
    const a = product.brand
    if(a in obj)
    {
        obj[a] += 1
    }
    else
    {
        obj[a] = 1
    }
}
console.log(obj)*/

