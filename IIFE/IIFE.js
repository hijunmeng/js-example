//立即执行函数
//当我们运行node IIFE.js 后可以看到所有函数都会被立马执行打印出日志
(function foo(){/*...*/console.log("1")}());//1

(function foo(){/*...*/console.log("2")})();//2

!function foo() {/*...*/console.log("3")}();//3

+function foo() {/*...*/console.log("4")}();//4

-function foo() {/*...*/console.log("5")}();//5

~function foo() {/*...*/console.log("6")}(); //6

(function sum(arg1,arg2){console.log(arg1+arg2)}(1,2)); //3
