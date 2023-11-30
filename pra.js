const testP = document.getElementById("textP")

testP.innerText = "超酷的"

//storage
// localStorage / sessionStorage

// JSON.Stringfy
//Json.parse

// let dog ={
//     name:"可口可樂",
//     type:"臘腸",
//     age:2
// }

let dog = 11

localStorage.setItem("dog", JSON.stringify(dog))
console.log(JSON.stringify(dog))
console.log(typeof(JSON.stringify(dog)))

let obj = localStorage.getItem("dog")
console.log(JSON.parse.obj)