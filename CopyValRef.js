let a = 10

let b = a
// now the b get value of a its a copy by a value, which means the b and a have a same value but, both memory adresses are different

const obj1 = {
    name:"Venkat",
    sub:"React",
    occupation:"Developer"
}

const copyObj = obj1

copyObj.name = "Rakesh"
console.log(obj1)
