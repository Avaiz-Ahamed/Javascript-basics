// const arr = [1,2,3,4]
// console.log(JSON.stringify(arr))
// arr.pop()
// console.log(JSON.stringify(arr))
const obj = {
    name: "someting",
    age: 23
}
console.log(JSON.stringify(obj));
delete obj.name
console.log(JSON.stringify(obj));