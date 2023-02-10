//FilteringAnArrayElements

var arr = [4,13,18,17,2]
var array1=[]
var array2=[]

for(i=0; i<=4; i++)
{
    if(arr[i]%2==0)
    {
        array1.push(arr[i])
    }
    else{
        array2.push(arr[i])
    }
}
console.log(JSON.stringify(array1))
console.log(JSON.stringify(array2))
