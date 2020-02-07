const moment = require("moment") //require 是 AMD规范引入方式;require是运行时调用，所以require理论上可以运用在代码的任何地方
const m1 = require("./modules/module1.js")
const m2 = require("./modules/module2.js")
const m3 = require("./modules/module3.js")
const m4 = require("./modules/module4.js")




let today = moment().format("YYYY-MM-DD")

console.log(today)

function main() {
    console.log("today is " + today)


    console.log("m1="+JSON.stringify(m1))//m1={"a":123,"PI":3.14,"person":{"name":"xiaoming","age":18}}
    console.log("m2="+JSON.stringify(m2))//m2={"a":123,"person":{"name":"xiaoming","age":18}}
    console.log("m3="+JSON.stringify(m3))//m3={"abc":{"a":123,"PI":3.14,"person":{"name":"xiaoming","age":18}}}
    console.log("m4="+JSON.stringify(m4))//m4={"xx_a":123,"xx_PI":3.14,"xx_person":{"name":"xiaoming","age":18}}
    let xh1=new m1.Person("xiaohong")
    console.log("xh="+xh1.name) //xh=xiaohong

    let xh4=new m4.xx_Person("xiaohong")
    console.log("xh="+xh4.name) //xh=xiaohong
}


main()