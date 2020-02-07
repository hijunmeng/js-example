let a = 123

function add(n1, n2) {

    return n1 + n2
}

const PI = 3.14


let person = { name: "xiaoming", age: 18 }

let Person = function (name) {
    this.name = name
}


//重命名
module.exports = {
    xx_a: a,
    xx_add: add,
    xx_PI: PI,
    xx_person: person,
    xx_Person: Person
}