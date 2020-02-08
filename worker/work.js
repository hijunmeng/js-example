
importScripts("other.js")//加载其他脚本

//Worker 线程内部需要有一个监听函数，监听message事件,与self.onmessage等效
// self.addEventListener('message', function (e) {
//     console.log("addEventListener message = "+JSON.stringify(e.data))
//   }, false);

self.onmessage= e=>{
    
    console.log("receive message from main:"+JSON.stringify(e.data))//接收值传递过来的数据
    console.log(new Uint8Array(e.data))//接收地址传递过来的数据


    let res=add(1,2)
    console.log("res="+res)
    self.postMessage("worker over")


    //self.close() //关闭自身,终止worker

}